import React, { useState, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface Props {
  fn: Function;
}

const QuillEditor = styled(ReactQuill)`
  margin-top: -25px;
  border: 1px solid #e9eff4;
  border-radius: 4px;

  .quill TextArea__QuillEditor-sc-71610aaf-1 dRXsLp {
  }
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid #e9eff4;
  }
  .ql-container {
    border: none;
  }
  .ql-editor {
    outline: none;
    min-height: 500px;
    height: auto;
    font-size: 0.875rem;
    @media (min-width: 1080px) {
      font-size: 1rem;
    }
  }
`;

const TextArea = (props: Props) => {
  const { fn } = props;
  const [value, setValue] = useState("");

  useEffect(() => {
    fn(value);
  }, [value]);

  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
      },
    };
  }, []);
  return (
    <QuillEditor
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
    />
  );
};

export default TextArea;
