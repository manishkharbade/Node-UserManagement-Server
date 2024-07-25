import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoute from './Routes/AppRoute';
import theme from './CommonComponents/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This ensures consistent baseline styling */}
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
