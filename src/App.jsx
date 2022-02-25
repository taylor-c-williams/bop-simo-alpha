import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent/RoutesComponent';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './context/Theme.js';

export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
