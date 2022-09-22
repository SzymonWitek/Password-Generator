import { useState, useContext } from 'react';

import { PasswordContext } from 'contexts';
import { Clipboard } from 'components';
import { StyledInput, IconWrapper } from './PasswordInput.css';

function PasswordInput() {
  // const [password, setPassword] = useState('');
  const passContext = useContext(PasswordContext);

  return (
    <StyledInput
      placeholder="P4$W0rd@"
      value={passContext!.password}
      setValue={passContext!.setPassword}
    >
      <IconWrapper>
        <Clipboard />
      </IconWrapper>
    </StyledInput>
  );
}

export default PasswordInput;
