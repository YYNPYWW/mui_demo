// 官方文档书写
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// 可组合导入
import { Button, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';

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
  typography: {
    h0: {
      fontWeight: 500,
      fontSize: '5rem'
    }
  }
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
          <Typography
            variant='h0'
            sx={{
              m: 2,
            }}
          >
            什么才叫满意？
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
