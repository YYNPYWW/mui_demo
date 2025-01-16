// 官方文档书写
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// 可组合导入
import { Button, createTheme, Stack, ThemeProvider } from '@mui/material';

import logo from './logo.svg';
import './App.css';

const paletteTheme = createTheme({
  palette: {
    primary: {
      main: '#ba68c8'
    },
    background: {
      paper: 'black'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={paletteTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              sx={{
                bgcolor: 'background.paper'
              }}
            >
              Text
            </Button>
            <Button
              variant="contained"
              sx={{
                color: 'orange',
                fontWeight: 700
              }}
            >
              Contained
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: '2px solid'
              }}
            >
              Outlined
            </Button>
          </Stack>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
