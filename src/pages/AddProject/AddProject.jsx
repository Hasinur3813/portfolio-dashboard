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
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="flex flex-col md:flex-row gap-6"
      >
        <div className="md:w-1/3">
          <Form.Item
            label="Project Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Enter project name" />
          </Form.Item>

          <Form.Item label="Main Technologies" name="mainTechnologies">
            <Input
              size="large"
              placeholder="e.g. React.js, Tailwind CSS, Node.js"
            />
          </Form.Item>

          <Form.Item label="GitHub Client Repo" name={["github", "client"]}>
            <Input size="large" placeholder="GitHub repo link" />
          </Form.Item>

          <Form.Item label="GitHub Server Repo" name={["github", "server"]}>
            <Input size="large" placeholder="Optional" />
          </Form.Item>

          <Form.Item label="Live Link" name="liveLink">
            <Input size="large" placeholder="Live website URL" />
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              Submit Project
            </Button>
          </Form.Item>
        </div>

        <div className="flex-1">
          <Form.Item label="Project Description">
            <LexicalComposer initialConfig={editorConfig}>
              <div className=" p-2 rounded">
                <Toolbar />
                <RichTextPlugin
                  contentEditable={
                    <ContentEditable className="border rounded-md border-gray-400 p-2 w-full min-h-[400px]" />
                  }
                />
                <HistoryPlugin />
                <AutoFocusPlugin />
              </div>
            </LexicalComposer>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddProject;
