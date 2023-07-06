import reactDom from "react-dom";

type Props = {
  children: React.ReactNode;
};

export const ModalPortal = ({ children }: Props) => {
  //Portal은 서버사이드렌더링일때는 처리가 되지 않도록설정
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal") as Element;
  // as Element없으면 에러 발생
  // =>getElementById를 통해 받아오는 객체의 Type을 지정
  return reactDom.createPortal(children, node);
};

export default ModalPortal;
