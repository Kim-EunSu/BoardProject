import styled from "styled-components";

type Props = {
  text: string;
  width: string;
  height: string;
  color?: string;
  background?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  onClick?: () => void;
};

type StyleProps = {
  width?: string;
  height?: string;
  color?: string;
  background?: string; // Add backgroundColor property
  fontSize?: string;
  radius?: string;
  padding?: string;
};

const ButtonLayout = (props: Props) => {
  return <Button {...props}>{props.text}</Button>;
};

const Button = styled.button<StyleProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  background-color: ${props => props.background};
  font-size: ${props => props.fontSize};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};

  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ButtonLayout;
