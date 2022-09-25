import { useContext } from 'react';

import { PasswordContext, PasswordContextI } from 'contexts';
import { CopyPassword } from 'components';
import { StyledInput, IconWrapper } from './PasswordInput.css';

function PasswordInput() {
  const { password, setPassword } = useContext(
    PasswordContext
  ) as PasswordContextI;

  return (
    <StyledInput placeholder="P4$W0rd@" value={password} setValue={setPassword}>
      <IconWrapper>
        <CopyPassword />
      </IconWrapper>
    </StyledInput>
  );
}

export default PasswordInput;
