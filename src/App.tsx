import { PasswordProvider } from 'components';

import { Home } from 'pages';

function App() {
  return (
    <PasswordProvider>
      <Home />
    </PasswordProvider>
  );
}

export default App;
