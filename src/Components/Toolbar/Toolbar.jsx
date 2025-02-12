import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useState, useEffect } from "react";
import {
  BgColorsOutlined,
  BoldOutlined,
  FontSizeOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list";

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

      {/* Bullet List */}
      <Button
        icon={<UnorderedListOutlined />}
        onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}
      />

      {/* Heading Selection */}
      <Dropdown
        menu={{
          items: [
            {
              key: "h1",
              label: "Heading 1",
              onClick: () =>
                editor.update(() => {
                  const selection = $getSelection();
                  if ($isRangeSelection(selection)) {
                    selection.formatHeading("h1");
                  }
                }),
            },
            {
              key: "h2",
              label: "Heading 2",
              onClick: () =>
                editor.update(() => {
                  const selection = $getSelection();
                  if ($isRangeSelection(selection)) {
                    selection.formatHeading("h2");
                  }
                }),
            },
            {
              key: "h3",
              label: "Heading 3",
              onClick: () =>
                editor.update(() => {
                  const selection = $getSelection();
                  if ($isRangeSelection(selection)) {
                    selection.formatHeading("h3");
                  }
                }),
            },
          ],
        }}
      >
        <Button icon={<FontSizeOutlined />} />
      </Dropdown>

      {/* Text Color Selection */}
      <Dropdown
        menu={{
          items: [
            {
              key: "red",
              label: <span style={{ color: "red" }}>Red</span>,
              onClick: () =>
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "color:red"),
            },
            {
              key: "blue",
              label: <span style={{ color: "blue" }}>Blue</span>,
              onClick: () =>
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "color:blue"),
            },
            {
              key: "green",
              label: <span style={{ color: "green" }}>Green</span>,
              onClick: () =>
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "color:green"),
            },
          ],
        }}
      >
        <Button icon={<BgColorsOutlined />} />
      </Dropdown>
    </div>
  );
};

export default Toolbar;
