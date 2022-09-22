import { useState } from 'react';

import { Checkbox, Summary } from 'components';
import { StyledCard, Option, Text, StyledButton, Wrapper } from './Panel.css';

function Panel() {
  const [isUppercaseActive, setIsUppercaseActive] = useState(false);
  const [isLowercaseActive, setIsLowercase] = useState(false);
  const [isNumbersActive, setIsNumbersActive] = useState(false);
  const [isSymbolsActive, setIsSymbolsActive] = useState(false);

  const securityLevel = [
    isUppercaseActive,
    isLowercaseActive,
    isNumbersActive,
    isSymbolsActive
  ].reduce(
    (prevVal, currVal) =>
      currVal ? Number(prevVal) + Number(currVal) : prevVal,
    0
  ); //TODO:MEMOIZATION

  return (
    <StyledCard>
      <Wrapper>
        <Option>
          <Checkbox
            isActive={isUppercaseActive}
            setIsActive={setIsUppercaseActive}
          />
          <Text>Include Uppercase Letters</Text>
        </Option>
        <Option>
          <Checkbox isActive={isLowercaseActive} setIsActive={setIsLowercase} />
          <Text>Include Lowercase Letters</Text>
        </Option>
        <Option>
          <Checkbox
            isActive={isNumbersActive}
            setIsActive={setIsNumbersActive}
          />
          <Text>Include Numbers</Text>
        </Option>
        <Option>
          <Checkbox
            isActive={isSymbolsActive}
            setIsActive={setIsSymbolsActive}
          />
          <Text>Include Symbols</Text>
        </Option>
        <Summary level={securityLevel} />
        <StyledButton>Generate ➜</StyledButton>
      </Wrapper>
    </StyledCard>
  );
}

export default Panel;
