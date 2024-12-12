import { Outlet } from "react-router-dom";

import { Layout } from "antd";

const { Content } = Layout;

function MainLayout() {
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Content
        style={{
          flex: 1,
          overflow: "auto",
          width: "100%",
          display: "flex",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}

export default MainLayout;
