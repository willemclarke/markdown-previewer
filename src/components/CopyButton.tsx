import React from "react";
import { Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface Props {
  onCopy: () => void;
}

export const CopyButton = (props: Props): JSX.Element => {
  const { onCopy } = props;
  return (
    <Button icon={<CopyOutlined />} onClick={onCopy} style={{ width: "100%", borderRadius: "10px", fontSize: "1rem" }}>
      Copy Markdown
    </Button>
  );
};
