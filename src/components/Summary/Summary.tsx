import { useContext } from 'react';

import { PasswordContext, PasswordContextI } from 'contexts';
import { Bars } from 'components';
import { Wrapper, Text, Group, Message } from './Summary.css';

const MESSAGES = ['Bad', 'Weak', 'Medium', 'Strong'];
const DEFAULT_MESSAGE = 'Horrible';

function Summary() {
  const { uppercaseActive, lowercaseActive, numbersActive, symbolsActive } =
    useContext(PasswordContext) as PasswordContextI;

  const securityLevel = [
    uppercaseActive,
    lowercaseActive,
    numbersActive,
    symbolsActive
  ].reduce(
    (prevVal, currVal) =>
      currVal ? Number(prevVal) + Number(currVal) : prevVal,
    0
  );

  return (
    <Wrapper>
      <Text>strength</Text>
      <Group>
        <Message>{MESSAGES[securityLevel - 1] || DEFAULT_MESSAGE}</Message>
        <Bars num={4} activeNum={securityLevel} />
      </Group>
    </Wrapper>
  );
}

export default Summary;
