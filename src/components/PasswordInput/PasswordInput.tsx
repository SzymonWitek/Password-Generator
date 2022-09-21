import { useState } from 'react';

import { Clipboard } from 'components';
import { StyledInput, IconWrapper } from './PasswordInput.css';

function PasswordInput() {
  const [password, setPassword] = useState('');
  return (
    <StyledInput placeholder="P4$W0rd@" value={password} setValue={setPassword}>
      <IconWrapper>
        <Clipboard />
      </IconWrapper>
    </StyledInput>
  );
}

export default PasswordInput;
