import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalProviders from './context';

import GlobalStyled from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <GlobalProviders>
          <Routes />
        </GlobalProviders>
      </Router>

      <GlobalStyled />
    </>
  );
};

export default App;
