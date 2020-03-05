import React from "react";
import useLocalStorage from "react-use-localstorage";
import * as _ from "lodash";

import { MarkdownInput } from "./components/MarkdownInput";
import { HtmlPreview } from "./components/HtmlPreview";
import { initialMarkdownState } from "./constants";

import { Row, Col } from "antd";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const App: React.FC = () => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", initialMarkdownState);

  return (
    <Layout style={{ backgroundColor: "#444444", height: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#444444",
          display: "flex",
          justifyContent: "center",
          paddingTop: "5px",
          fontFamily: "Trocchi, serif",
          fontSize: "2.5rem",
          color: "white"
        }}
      >
        Markdown Live Preview
      </Header>
      <Content style={{ paddingTop: "5px", paddingBottom: "10px" }}>
        <Row style={{ paddingTop: "5px", height: "100%" }}>
          <Col span={5} />
          <Col
            span={7}
            style={{
              background: "#dba212",
              padding: "20px 10px 20px 20px",
              height: "100%",
              borderRadius: "10px"
            }}
          >
            <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
          </Col>
          <Col
            span={7}
            style={{
              background: "#dba212",
              padding: "20px 20px 20px 10px",
              height: "100%",
              borderRadius: "10px"
            }}
          >
            <HtmlPreview markdown={markdown} />
          </Col>
          <Col span={5} />
        </Row>
      </Content>
      <Footer
        style={{
          backgroundColor: "#444444",
          paddingBottom: "10px"
        }}
      />
    </Layout>
  );
};

export default App;
