import React from 'react';

import GlobalStyled from './styles/global';

import SignIn from './pages/singin';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyled />
    </>
  );
};

export default App;
