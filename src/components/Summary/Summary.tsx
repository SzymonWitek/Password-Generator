import { Wrapper, Text, Group, Message } from './Summary.css';
import { Bars } from 'components';

const MESSAGES = ['Bad', 'Weak', 'Medium', 'Strong'];
const DEFAULT_MESSAGE = 'Horrible';

interface SummaryProps {
  level?: number;
}

function Summary({ level = 3 }: SummaryProps) {
  return (
    <Wrapper>
      <Text>strength</Text>
      <Group>
        <Message>{MESSAGES[level - 1] || DEFAULT_MESSAGE}</Message>
        <Bars num={4} activeNum={level} />
      </Group>
    </Wrapper>
  );
}

export default Summary;
