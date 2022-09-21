import { useState } from 'react';

import { Checkbox } from 'components/UI';
import { StyledCard, Option, Text } from './Panel.css';

function Panel() {
  const [isUppercaseActive, setIsUppercaseActive] = useState(false);
  const [isLowercaseActive, setIsLowercase] = useState(false);
  const [isNumbersActive, setIsNumbersActive] = useState(false);
  const [isSymbolsActive, setIsSymbolsActive] = useState(false);

  return (
    <StyledCard>
      <Option>
        <Checkbox
          isActive={isUppercaseActive}
          setIsActive={setIsUppercaseActive}
        />
        <Text>Include Uppercase Letters</Text>
      </Option>
      <Option>
        <Checkbox isActive={isLowercaseActive} setIsActive={setIsLowercase} />{' '}
        <Text>Include Lowercase Letters</Text>
      </Option>
      <Option>
        <Checkbox isActive={isNumbersActive} setIsActive={setIsNumbersActive} />{' '}
        <Text>Include Numbers</Text>
      </Option>
      <Option>
        <Checkbox isActive={isSymbolsActive} setIsActive={setIsSymbolsActive} />{' '}
        <Text>Include Symbols</Text>
      </Option>
    </StyledCard>
  );
}

export default Panel;
