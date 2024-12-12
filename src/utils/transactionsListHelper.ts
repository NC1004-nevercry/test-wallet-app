import { toZonedTime } from "date-fns-tz";

export const calculatePointsForToday = (): string => {
  // Get today's date in Poland timezone
  const timezone = "Europe/Warsaw";
  const today = toZonedTime(new Date(), timezone);

  const month = today.getMonth() + 1;
  const day = today.getDate();

  const seasonStartDates: Record<string, { month: number; day: number }> = {
    Autumn: { month: 9, day: 1 }, // September 1
    Winter: { month: 12, day: 1 }, // December 1
    Spring: { month: 3, day: 1 }, // March 1
    Summer: { month: 6, day: 1 }, // June 1
  };

  let dayOfSeason = 0;

  if (month >= 9 && month <= 11) {
    dayOfSeason = calculateDayOfSeason(seasonStartDates.Autumn, { month, day });
  } else if (month === 12 || month <= 2) {
    dayOfSeason = calculateDayOfSeason(seasonStartDates.Winter, { month, day });
  } else if (month >= 3 && month <= 5) {
    dayOfSeason = calculateDayOfSeason(seasonStartDates.Spring, { month, day });
  } else if (month >= 6 && month <= 8) {
    dayOfSeason = calculateDayOfSeason(seasonStartDates.Summer, { month, day });
  }

  const points = calculateDailyPoints(dayOfSeason);

  return points;
};

const calculateDayOfSeason = (
  seasonStart: { month: number; day: number },
  today: { month: number; day: number }
): number => {
  const startDate = new Date(
    new Date().getFullYear(),
    seasonStart.month - 1,
    seasonStart.day
  );
  const currentDate = new Date(
    new Date().getFullYear(),
    today.month - 1,
    today.day
  );
  const differenceInDays = Math.ceil(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return differenceInDays + 1; // Day 1 is inclusive
};

const calculateDailyPoints = (day: number): string => {
  if (day === 1) return "2";
  if (day === 2) return "3";

  let pointsPrevPrev = 2;
  let pointsPrev = 3;
  let currentPoints = 0;

  for (let currentDay = 3; currentDay <= day; currentDay++) {
    currentPoints = Math.round(pointsPrevPrev + pointsPrev * 0.6);
    pointsPrevPrev = pointsPrev;
    pointsPrev = currentPoints;
  }

  if (currentPoints > 1000) {
    return `${Math.floor(currentPoints / 1000)}K`;
  }

  return currentPoints.toString();
};

export const getRandomNumber = () => {
  const randomNum = Math.random() * (1500 - 1) + 1;
  const roundedNum = randomNum.toFixed(2);

  return roundedNum;
};

export function getCurrentMonthName(): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();
  return months[currentMonth];
}
