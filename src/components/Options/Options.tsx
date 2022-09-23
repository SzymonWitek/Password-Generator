import { useContext } from 'react';
import { PasswordContext, PasswordContextI } from 'contexts';

import { Checkbox } from 'components';
import { Option, Text } from './Options.css';

function Options() {
  const {
    uppercaseActive,
    setUppercaseActive,
    lowercaseActive,
    setLowercaseActive,
    numbersActive,
    setNumbersActive,
    symbolsActive,
    setSymbolsActive
  } = useContext(PasswordContext) as PasswordContextI;

  return (
    <>
      <Option>
        <Checkbox isActive={uppercaseActive} setIsActive={setUppercaseActive} />
        <Text>Include Uppercase Letters</Text>
      </Option>
      <Option>
        <Checkbox isActive={lowercaseActive} setIsActive={setLowercaseActive} />
        <Text>Include Lowercase Letters</Text>
      </Option>
      <Option>
        <Checkbox isActive={numbersActive} setIsActive={setNumbersActive} />
        <Text>Include Numbers</Text>
      </Option>
      <Option>
        <Checkbox isActive={symbolsActive} setIsActive={setSymbolsActive} />
        <Text>Include Symbols</Text>
      </Option>
    </>
  );
}

export default Options;
