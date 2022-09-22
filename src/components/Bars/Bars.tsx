import { Bar, Wrapper } from './Bars.css';

interface BarsProps {
  num: number;
  activeNum: number;
}

function Bars({ num, activeNum }: BarsProps) {
  const items = new Array(num).fill(0);

  return (
    <Wrapper>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Bar key={Math.random()} isActive={index <= activeNum - 1} />;
        })}
    </Wrapper>
  );
}

export default Bars;
