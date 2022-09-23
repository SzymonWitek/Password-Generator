import { useContext } from 'react';

import { PasswordContext, PasswordContextI } from 'contexts';
import { Clipboard } from 'components';
import { StyledInput, IconWrapper } from './PasswordInput.css';

function PasswordInput() {
  const passContext = useContext(PasswordContext) as PasswordContextI;

  return (
    <StyledInput
      placeholder="P4$W0rd@"
      value={passContext!.password}
      setValue={passContext!.setPassword}
    >
      <IconWrapper>
        <Clipboard copyValue="a" />
      </IconWrapper>
    </StyledInput>
  );
}

export default PasswordInput;
