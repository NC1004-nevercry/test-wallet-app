import { Link } from "react-router-dom";
import { Flex, Typography } from "antd";

import {
  CardBalanceBlock,
  DailyPointBlock,
  PaymentBlock,
  TransactionItem,
} from "src/components/transactionsList";
import mockData from "src/data/transactionData.json";
import { ITransaction } from "src/types/dto";

const { Text } = Typography;

function InformatinPanel() {
  return (
    <Flex style={{ width: "100%" }} gap={"small"}>
      <Flex vertical style={{ width: "50%" }} gap={"small"}>
        <CardBalanceBlock />
        <DailyPointBlock />
      </Flex>
      <div style={{ width: "50%" }}>
        <PaymentBlock />
      </div>
    </Flex>
  );
}

function LatestTransactionsBlock() {
  const transactionData: ITransaction[] = mockData;

  return (
    <div style={{ width: "100%", paddingBottom: 20 }}>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 30,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Latest Transactions
      </Text>
      <Flex vertical style={{ width: "100%" }}>
        {transactionData.map((data, index) => (
          <div key={index}>
            <Link to={`/transactiondetail/${data.id}`}>
              <TransactionItem data={data} />
            </Link>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#f5f5f5",
              }}
            ></div>
          </div>
        ))}
      </Flex>
    </div>
  );
}

function TransactionsList() {
  return (
    <Flex
      vertical
      style={{ width: "100%", height: "100%", padding: 20 }}
      gap={"large"}
    >
      <InformatinPanel />
      <LatestTransactionsBlock />
    </Flex>
  );
}

export default TransactionsList;
