import React from "react";
import useLocalStorage from "react-use-localstorage";
import * as _ from "lodash";

import { MarkdownInput } from "./components/MarkdownInput";
import { HtmlPreview } from "./components/HtmlPreview";
import { CopyButton } from "./components/CopyButton";
import { useClipboard } from "use-clipboard-copy";
import { initialMarkdownState } from "./constants";

import { Row, Col } from "antd";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const App: React.FC = () => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", initialMarkdownState);
  const clipboard = useClipboard();

  const onCopy = React.useCallback(() => {
    clipboard.copy(markdown); // programmatically copying a value
  }, [clipboard.copy]);

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
            <MarkdownInput clipboardRef={clipboard.target} markdown={markdown} setMarkdown={setMarkdown} />
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
        <Row justify={"center"} style={{ padding: "10px 0px 0px 0px" }}>
          <Col span={14}>
            <CopyButton onCopy={onCopy} />
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          backgroundColor: "#444444",
          width: "100%",
          height: "64px"
        }}
      />
    </Layout>
  );
};

export default App;
