import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useState, useEffect } from "react";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setIsBold(selection.hasFormat("bold"));
          setIsItalic(selection.hasFormat("italic"));
          setIsUnderline(selection.hasFormat("underline"));
        }
      });
    });
  }, [editor]);

  return (
    <div className="flex gap-2 mb-2 p-2 bg-gray-100 border rounded">
      <Button
        type={isBold ? "primary" : "default"}
        icon={<BoldOutlined />}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
      />
      <Button
        type={isItalic ? "primary" : "default"}
        icon={<ItalicOutlined />}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
      />
      <Button
        type={isUnderline ? "primary" : "default"}
        icon={<UnderlineOutlined />}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
      />
    </div>
  );
};

export default Toolbar;
