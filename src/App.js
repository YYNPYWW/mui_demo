import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import AddPost from './components/AddPost.jsx';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction='row' spacing={2} >
          <SideBar setMode={setMode} mode={mode} />
          <Footer />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
