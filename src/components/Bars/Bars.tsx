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
          return (
            <Bar
              key={index + Math.floor(Math.random() * 1000)}
              isActive={index <= activeNum - 1}
            />
          );
        })}
    </Wrapper>
  );
}

export default Bars;
