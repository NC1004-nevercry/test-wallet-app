import { Flex, Typography } from "antd";

import { getRandomNumber } from "src/utils/transactionsListHelper";

const { Text } = Typography;
function CardBalanceBlock() {
  const randomNumber = parseFloat(getRandomNumber());
  const difference = (1500 - randomNumber).toFixed(2);
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
      <Text style={{ fontWeight: 500, fontSize: 18 }}>Card Balance</Text>
      <Text style={{ fontWeight: 700, fontSize: 30 }}>${randomNumber}</Text>
      <Text style={{ fontSize: 18 }} disabled>
        ${difference} Available
      </Text>
    </Flex>
  );
}

export default CardBalanceBlock;
