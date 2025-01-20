// 官方文档书写
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// 可组合导入
import { Button, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import { blue, purple, red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const paletteTheme = createTheme({
  palette: {
    primary: {
      main: '#ba68c8'
    },
    customizable: {
      main: "#4a148c",
      light: "#e57373",
      dark: "#0d47a1"
    },
    background: {
      paper: 'black'
    }
  },
  typography: {
    h0: {
      fontWeight: 500,
      fontSize: '5rem',
    }
  }
})

const MyComponent = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.customizable.light,
  fontWeight: 700
}))

// const MyComponent = styled(Button)({
//   backgroundColor: '#e57373',
//   fontWeight: 700
// })

function App() {
  return (
    <ThemeProvider theme={paletteTheme}>
      <div className="App">
        <header className="App-header">
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
              color='customizable'
              sx={{
                fontWeight: 700
              }}
            >
              Contained
            </Button>
            <Button
              variant="outlined"
              sx={{
                bgcolor: 'customizable.dark',
                border: '2px solid'
              }}
            >
              Outlined
            </Button>
            <MyComponent
              variant="contained"
            >
              Customizable
            </MyComponent>
          </Stack>
          <Typography
            variant='h0'
            sx={{
              m: 2,
              color: 'customizable.light',
            }}
          >
            为什么颜色不生效？
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
