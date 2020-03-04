import React from "react";
import * as _ from "lodash";
import Markdown from "markdown-to-jsx";

import { Card } from "antd";

interface Props {
  markdown: string;
}

export const HtmlPreview = (props: Props): JSX.Element => {
  const { markdown } = props;

  return (
    <Card style={{ height: "100%", width: "100%", borderRadius: "7.5px", overflow: "auto" }}>
      <Markdown>{markdown}</Markdown>
    </Card>
  );
};
