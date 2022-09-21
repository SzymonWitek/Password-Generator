import { StyledButton } from './Button.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...restProps }: ButtonProps) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default Button;
