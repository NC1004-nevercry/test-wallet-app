import { Flex, Avatar, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillWave,
  faAppleAlt,
} from "@fortawesome/free-solid-svg-icons";

import { ITransaction } from "src/types/dto";

const { Text, Paragraph } = Typography;

function TransactionItem({ data }: { data: ITransaction }) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);

    if (date >= oneWeekAgo) {
      return date.toLocaleDateString("en-PL", { weekday: "long" });
    } else {
      return date.toLocaleDateString("en-PL");
    }
  };

  return (
    <Flex
      style={{ backgroundColor: "#ffffff", width: "100%", padding: 10 }}
      gap={"middle"}
    >
      <div style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 5 }}>
        <Avatar
          shape="square"
          size={60}
          style={{ backgroundColor: data.logo?.background }}
          icon={
            <FontAwesomeIcon
              icon={
                data.transactionName === "Payment"
                  ? faAppleAlt
                  : data.transactionName === "Target"
                  ? faCreditCard
                  : faMoneyBillWave
              }
            />
          }
        />
      </div>

      <Flex style={{ flex: 1, minWidth: 0 }}>
        <Flex vertical style={{ width: "100%" }}>
          <Flex justify="space-between">
            <Text style={{ fontSize: 20, fontWeight: 500 }}>
              {data.transactionName}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>
              {data.type === "Payment" ? `+$${data.amount}` : `$${data.amount}`}
            </Text>
          </Flex>
          <Paragraph
            ellipsis={{
              rows: 1,
            }}
            style={{ color: "#8c8c8c", fontSize: 18, marginBottom: 0 }}
          >
            {data.pendingStatus
              ? `Pending - ${data.transactionDescription}`
              : data.transactionDescription}
          </Paragraph>

          <Paragraph
            style={{ color: "#8c8c8c", fontSize: 18, marginBottom: 0 }}
          >
            {data.authorizedUser
              ? `${data.authorizedUser} - ${formatDate(data.date)}`
              : formatDate(data.date)}
          </Paragraph>
        </Flex>
      </Flex>

      <Flex align="flex-start" justify="flex-start">
        <RightOutlined style={{ fontSize: 20, color: "#bfbfbf" }} />
      </Flex>
    </Flex>
  );
}

export default TransactionItem;
