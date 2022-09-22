import { useRef } from 'react';

import {
  Wrapper,
  Text,
  Group,
  StyledSlider,
  SliderContainer
} from './RangeSlider.css';

interface RangeSliderProps extends React.HTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

function RangeSlider({
  value,
  setValue,
  min,
  max,
  ...restProps
}: RangeSliderProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(+event.target.value);

  return (
    <Wrapper>
      <Group>
        <Text>Character Length </Text>
        <Text secondary>{value}</Text>
      </Group>
      <SliderContainer>
        <StyledSlider
          {...restProps}
          type="range"
          min={min}
          max={max}
          onChange={handleValueChange}
          value={value}
          ref={ref}
        />
      </SliderContainer>
    </Wrapper>
  );
}

export default RangeSlider;
