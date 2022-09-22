import { createContext } from 'react';

interface PasswordContextI {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const initialState = {
  password: ''
};

export const PasswordContext = createContext<PasswordContextI | null>(null);
