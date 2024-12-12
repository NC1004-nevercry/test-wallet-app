import { Flex, Typography } from "antd";

import { calculatePointsForToday } from "src/utils/transactionsListHelper";

const { Text } = Typography;

function DailyPointBlock() {
  const todayPoints = calculatePointsForToday();

  return (
    <Flex
      vertical
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        padding: 10,
      }}
    >
      <Text style={{ fontWeight: 400, fontSize: 18, marginTop: 10 }}>
        Daily Points
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }} disabled>
        {todayPoints}
      </Text>
    </Flex>
  );
}

export default DailyPointBlock;
