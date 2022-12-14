import { useEffect } from 'react';

import { Wrapper, CheckMark, StyledInput } from './Checkbox.css';

interface CheckboxProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Checkbox({ isActive, setIsActive }: CheckboxProps) {
  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <Wrapper isActive={isActive}>
      <StyledInput type="checkbox" onClick={handleClick} />
      <CheckMark />
    </Wrapper>
  );
}

export default Checkbox;
