import React from "react";
import * as _ from "lodash";

import { Row, Col } from "antd";
import { Layout } from "antd";
import { MarkdownInput } from "./components/MarkdownInput";
import { HtmlPreview } from "./components/HtmlPreview";

const { Header, Content } = Layout;

export const App: React.FC = () => {
  const [markdown, setMarkdown] = React.useState(``);

  return (
    <Layout style={{ backgroundColor: "#fcba12", height: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#fcba12",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
          fontFamily: "Trocchi, serif",
          fontSize: "3rem",
          color: "white"
        }}
      >
        Markdown Live Preview
      </Header>
      <Content style={{ paddingTop: "10px" }}>
        <Row style={{ paddingTop: "10px", height: "100%" }}>
          <Col
            span={12}
            style={{
              background: "#dba212",
              padding: "20px 20px 20px 20px",
              height: "100%"
            }}
          >
            <MarkdownInput setMarkdown={setMarkdown} />
          </Col>
          <Col
            span={12}
            style={{
              background: "#dba212",
              padding: "20px 20px 20px 20px",
              height: "100%"
            }}
          >
            <HtmlPreview markdown={markdown} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
