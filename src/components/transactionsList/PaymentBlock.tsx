import { Flex, Avatar, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { getCurrentMonthName } from "src/utils/transactionsListHelper";

const { Text } = Typography;

function PaymentBlock() {
  const getCurrentMonth = getCurrentMonthName();
  return (
    <Flex
      vertical
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text style={{ fontWeight: 500, fontSize: 18 }}>No Payment Due</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }} disabled>
        You've paid your {getCurrentMonth} balance
      </Text>
      <Flex style={{ flex: 1 }} justify="flex-end" align="flex-end">
        <Avatar
          size={64}
          icon={<CheckOutlined style={{ color: "#000000" }} />}
          style={{ backgroundColor: "#f0f0f0" }}
        />
      </Flex>
    </Flex>
  );
}

export default PaymentBlock;
