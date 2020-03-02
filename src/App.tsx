import React from "react";
import * as _ from "lodash";

import { Row, Col, Card } from "antd";
import { Layout } from "antd";

const { Header, Content } = Layout;

export const App: React.FC = () => {
  return (
    <Layout style={{ backgroundColor: "#cddddd", height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          fontFamily: "Trocchi, serif",
          fontSize: "3rem"
        }}
      >
        Markdown Previewer
      </Header>
      <Content>
        <Row style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
          <Col
            span={12}
            style={{
              background: "red",
              backgroundColor: "#e6f2f2",
              padding: "20px 10px 20px 20px"
            }}
          >
            <Card style={{ width: "500px", height: "700px", backgroundColor: "white", margin: "0px" }}>Col1</Card>
          </Col>
          <Col span={12} style={{ background: "red", backgroundColor: "#e6f2f2", padding: "20px 20px 20px 10px" }}>
            <Card style={{ width: "500px", height: "700px", backgroundColor: "white", margin: "0px" }}>Col2</Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
