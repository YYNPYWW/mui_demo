import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
import { Stack, ThemeProvider } from '@mui/material';
import theme from './theme.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Stack direction='row' spacing={2} >
        <SideBar />
        <Footer />
        <RightBar />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
