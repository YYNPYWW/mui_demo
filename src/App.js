import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
import { Stack } from '@mui/material';


function App() {
  return (
    <Stack direction='row' spacing={2} >
      {/* <NavBar /> */}
      <SideBar />
      <Footer />
      <RightBar />
    </Stack>
  );
}

export default App;
