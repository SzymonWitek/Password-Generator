import React from 'react';

import { StyledInput, Wrapper } from './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

function Input({ children, setValue, value, ...restProps }: InputProps) {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <StyledInput
        value={value}
        {...restProps}
        onChange={handleValueChange}
      ></StyledInput>
      {children}
    </Wrapper>
  );
}

export default Input;
