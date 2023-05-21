import styled from "styled-components";

type Props = {
  text?: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  border?: string;
  onClick?: () => void;
};

type StyleProps = {
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  border?: string;
};

const ButtonLayout = (props: Props) => {
  return <Button {...props}>{props.text}</Button>;
};

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

  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

export default ButtonLayout;
