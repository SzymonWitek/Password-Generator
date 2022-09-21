import { PasswordInput, Panel } from 'components';
import { Wrapper, Text } from './Home.css';

function Home() {
  return (
    <Wrapper>
      <Text>Password Generator</Text>
      <PasswordInput />
      <Panel />
    </Wrapper>
  );
}

export default Home;
