import { useContext } from 'react';
import { PasswordContext } from 'contexts';

import generatePassword from 'utils/generatePassword';
import { StyledButton } from './PasswordGenerator.css';

interface PasswordGeneratorProps {
  args: {
    length: number;
    symbols?: boolean;
    numbers?: boolean;
    lowercases?: boolean;
    uppercases?: boolean;
  };
}

function PasswordGenerator({ args }: PasswordGeneratorProps) {
  const passContext = useContext(PasswordContext);

  const handleBtnClick = () => {
    const generatedPassword = generatePassword({ args });
    // console.log('WYGENEROWANO HASLO: ', generatePassword({ args }));
    passContext?.setPassword(generatedPassword);
  };

  return <StyledButton onClick={handleBtnClick}>Generate ➜</StyledButton>;
}

export default PasswordGenerator;
