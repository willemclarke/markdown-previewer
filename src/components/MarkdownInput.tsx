import React from "react";
import * as _ from "lodash";
import { Input } from "antd";

const { TextArea } = Input;

interface Props {
  setMarkdown: (v: string) => void;
  markdown: string;
  clipboardRef: React.RefObject<any>;
}

export const MarkdownInput = (props: Props): JSX.Element => {
  const { clipboardRef, markdown, setMarkdown } = props;
  return (
    <TextArea
      ref={clipboardRef}
      defaultValue={markdown}
      style={{ height: "100%", width: "100%", backgroundColor: "white", margin: "0px", borderRadius: "7.5px" }}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMarkdown(e.target.value)}
    />
  );
};
