import styled from "styled-components";

type Props = {
  text: string;
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  onClick: () => void;
};

type StyleProps = {
  width: string;
  height: string;
  color: string;
  backgroundColor: string; // Add backgroundColor property
  fontSize: string;
};

const ButtonLayout = (props: Props) => {
  return <Button {...props}>{props.text}</Button>;
};

const Button = styled.button<StyleProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.fontSize};
  font-weight: 600;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ButtonLayout;
