import { useState } from 'react';

import { PasswordContext } from 'contexts';

interface PasswordProviderProps {
  children: React.ReactNode;
}

function PasswordProvider({ children }: PasswordProviderProps) {
  const [password, setPassword] = useState('');
  const [uppercaseActive, setUppercaseActive] = useState(false);
  const [lowercaseActive, setLowercaseActive] = useState(false);
  const [numbersActive, setNumbersActive] = useState(false);
  const [symbolsActive, setSymbolsActive] = useState(false);
  const [charLength, setCharLength] = useState(0);

  const contextValue = {
    password,
    setPassword,
    uppercaseActive,
    setUppercaseActive,
    lowercaseActive,
    setLowercaseActive,
    numbersActive,
    setNumbersActive,
    charLength,
    setCharLength,
    symbolsActive,
    setSymbolsActive
  };

  return (
    <PasswordContext.Provider value={contextValue}>
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordProvider;
