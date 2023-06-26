import styled from "styled-components";

const Wrapper = styled.div`
  background: red;
  height: 600px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ProfileModal({ onClose, children }: Props) {
  return (
    <Wrapper
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button onClick={() => onClose()}>X</button>
      {children}
    </Wrapper>
  );
}
