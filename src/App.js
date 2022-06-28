import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
