import { useContext } from 'react';
import { PasswordContext, PasswordContextI } from 'contexts';

import { Summary, RangeSlider, PasswordGenerator, Options } from 'components';
import { StyledCard, Wrapper } from './Panel.css';

function Panel() {
  const { charLength, setCharLength } = useContext(
    PasswordContext
  ) as PasswordContextI;

  return (
    <StyledCard>
      <Wrapper>
        <RangeSlider
          min={0}
          max={20}
          value={charLength}
          setValue={setCharLength}
        />
        <Options />
        <Summary />
        <PasswordGenerator />
      </Wrapper>
    </StyledCard>
  );
}

export default Panel;
