import React, { useState, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import dynamic from "next/dynamic";

interface Props {
  fn: Function;
}

const QuillWrapper = dynamic(
  () =>
    import("react-quill").then(module => {
      const ReactQuill = module.default;
      return styled(ReactQuill)`
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
    }),
  {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  },
);

// const QuillEditor = styled(ReactQuill)`
//   margin-top: -25px;
//   border: 1px solid #e9eff4;
//   border-radius: 4px;

//   .quill TextArea__QuillEditor-sc-71610aaf-1 dRXsLp {
//   }
//   .ql-toolbar {
//     border: none;
//     border-bottom: 1px solid #e9eff4;
//   }
//   .ql-container {
//     border: none;
//   }
//   .ql-editor {
//     outline: none;
//     min-height: 500px;
//     height: auto;
//     font-size: 0.875rem;
//     @media (min-width: 1080px) {
//       font-size: 1rem;
//     }
//   }
// `;

const TextArea = (props: Props) => {
  const { fn } = props;
  const [value, setValue] = useState("");

  //문자열에 Tag출력을 방지
  //=> 사용하면 글자가 거꾸로쓰여지는 문제 발생...
  const removePTags = (html: string) => {
    return html.replace(/<p>/g, "").replace(/<\/p>/g, "");
  };

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
    <QuillWrapper
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
    />
  );
};

export default TextArea;
