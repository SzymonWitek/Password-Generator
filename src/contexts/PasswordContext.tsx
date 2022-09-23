import React, { createContext } from 'react';

export interface PasswordContextI {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  uppercaseActive: boolean;
  setUppercaseActive: React.Dispatch<React.SetStateAction<boolean>>;
  lowercaseActive: boolean;
  setLowercaseActive: React.Dispatch<React.SetStateAction<boolean>>;
  numbersActive: boolean;
  setNumbersActive: React.Dispatch<React.SetStateAction<boolean>>;
  symbolsActive: boolean;
  setSymbolsActive: React.Dispatch<React.SetStateAction<boolean>>;
  charLength: number;
  setCharLength: React.Dispatch<React.SetStateAction<number>>;
}

export const PasswordContext = createContext<PasswordContextI | null>(null);
