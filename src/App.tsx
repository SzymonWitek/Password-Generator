import { useState } from 'react';
import { PasswordContext } from 'contexts';

import { Home } from 'pages';

function App() {
  const [password, setPassword] = useState('');

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      <Home />
    </PasswordContext.Provider>
  );
}

export default App;
