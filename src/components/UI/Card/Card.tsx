import { Wrapper } from './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Card({ children, ...restProps }: CardProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

export default Card;
