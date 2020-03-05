import React from "react";
import { Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface Props {
  onCopy: () => void;
}

export const CopyButton = (props: Props): JSX.Element => {
  const { onCopy } = props;
  return (
    <Button
      size={"large"}
      icon={<CopyOutlined style={{ fontSize: "1.1rem" }} />}
      onClick={onCopy}
      style={{ width: "100%", borderRadius: "10px", fontSize: "1.1rem" }}
    >
      Copy Markdown
    </Button>
  );
};
