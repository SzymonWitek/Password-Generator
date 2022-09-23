import { useContext } from 'react';

import { PasswordContext, PasswordContextI } from 'contexts';
import { Clipboard } from 'components';
import { StyledInput, IconWrapper } from './PasswordInput.css';

function PasswordInput() {
  const { password, setPassword } = useContext(
    PasswordContext
  ) as PasswordContextI;

  return (
    <StyledInput placeholder="P4$W0rd@" value={password} setValue={setPassword}>
      <IconWrapper>
        <Clipboard copyValue={password} />
      </IconWrapper>
    </StyledInput>
  );
}

export default PasswordInput;
