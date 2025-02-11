import { useState } from "react";
import { Form, Input, Button } from "antd";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import Toolbar from "../../Components/Toolbar/Toolbar";

const editorConfig = {
  theme: {},
  onError(error) {
    console.error(error);
  },
};

const AddProject = () => {
  const [editorState, setEditorState] = useState("");

  const onFinish = (values) => {
    console.log("Form Data:", { ...values, description: editorState });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>

        <Form.Item label="Main Technologies" name="mainTechnologies">
          <Input placeholder="e.g. React.js, Tailwind CSS, Node.js" />
        </Form.Item>

        <Form.Item label="GitHub Client Repo" name={["github", "client"]}>
          <Input placeholder="GitHub repo link" />
        </Form.Item>

        <Form.Item label="GitHub Server Repo" name={["github", "server"]}>
          <Input placeholder="Optional" />
        </Form.Item>

        <Form.Item label="Live Link" name="liveLink">
          <Input placeholder="Live website URL" />
        </Form.Item>

        <Form.Item label="Project Description">
          <LexicalComposer initialConfig={editorConfig}>
            <div className="border p-2 rounded">
              <Toolbar />
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="border p-2 w-full min-h-[100px]" />
                }
              />
              <HistoryPlugin />
              <AutoFocusPlugin />
            </div>
          </LexicalComposer>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProject;
