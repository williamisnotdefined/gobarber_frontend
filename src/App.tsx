import React from 'react';

import SignIn from './pages/SignIn';
import GlobalProviders from './context';

import GlobalStyled from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalProviders>
        <SignIn />
      </GlobalProviders>

      <GlobalStyled />
    </>
  );
};

export default App;
