import { useContext } from 'react';
import { PasswordContext, PasswordContextI } from 'contexts';

import generatePassword from 'utils/generatePassword';
import { StyledButton } from './PasswordGenerator.css';

function PasswordGenerator() {
  const {
    charLength: length,
    symbolsActive: symbols,
    numbersActive: numbers,
    lowercaseActive: lowercases,
    uppercaseActive: uppercases,
    setPassword
  } = useContext(PasswordContext) as PasswordContextI;

  const handleBtnClick = () => {
    const generatedPassword = generatePassword({
      args: { length, symbols, numbers, lowercases, uppercases }
    });
    setPassword(generatedPassword);
  };

  return <StyledButton onClick={handleBtnClick}>Generate ➜</StyledButton>;
}

export default PasswordGenerator;
