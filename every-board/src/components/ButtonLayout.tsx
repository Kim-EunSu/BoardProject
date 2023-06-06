import styled from "styled-components";
import Link from "next/link";

interface Props {
  text?: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  border?: string;
  margin?: string;
  onClick?: () => void;
}

interface StyleProps {
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  border?: string;
  margin?: string;
}

const Button = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  background-color: ${props => props.background};
  font-size: ${props => props.fontSize};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
  border: ${props => props.border};
  margin: ${props => props.margin};

  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

const ButtonLayout = (props: Props) => {
  return <Button {...props}>{props.text}</Button>;
};

export default ButtonLayout;
