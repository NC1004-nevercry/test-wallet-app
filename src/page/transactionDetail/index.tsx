import { Flex, Typography } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

import mockData from "src/data/transactionData.json";
import { ITransaction } from "src/types/dto";

const { Text, Paragraph } = Typography;
function TransactionDetail() {
  const { transactionID } = useParams();
  const navigate = useNavigate();

  const transactionData: ITransaction | undefined = mockData.find(
    (transaction) => transaction.id === transactionID
  );

  const formatDate = (isoDate: string | undefined): string => {
    if (!isoDate) return "";

    const date = new Date(isoDate);

    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    return `${month}/${day}/${year} ${hours}:${minutes}`;
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Flex
        vertical
        style={{
          width: "100%",
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <LeftOutlined
          style={{ fontSize: 20, color: "#1890ff" }}
          onClick={handleBack}
        />

        <Flex
          vertical
          style={{ width: "100%", marginTop: 30, padding: 10 }}
          align="center"
        >
          <Paragraph
            style={{
              fontSize: 60,
              fontWeight: 700,
              marginBottom: 0,
            }}
          >
            ${transactionData?.amount}
          </Paragraph>
          <Text style={{ fontSize: 18, fontWeight: 400, color: "#8c8c8c" }}>
            {transactionData?.transactionName}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 400, color: "#8c8c8c" }}>
            {formatDate(transactionData?.date)}
          </Text>

          <Flex
            vertical
            style={{
              width: "100%",
              background: "#ffffff",
              padding: 15,
              borderRadius: 10,
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 700 }}>
              Status: {transactionData?.pendingStatus ? "Pending" : "Approved"}
            </Text>
            <Text style={{ fontSize: 18, color: "#8c8c8c" }}>
              {transactionData?.transactionDescription}
            </Text>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#f5f5f5",
                marginTop: 10,
              }}
            ></div>

            <Flex justify="space-between">
              <Text style={{ fontSize: 18, fontWeight: 700 }}>Total</Text>
              <Text style={{ fontSize: 18, fontWeight: 700 }}>
                ${transactionData?.amount}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default TransactionDetail;
