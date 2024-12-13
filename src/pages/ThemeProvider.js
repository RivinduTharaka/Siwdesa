import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF', // Ensure you have 'main' color defined here
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app's content */}
    </ThemeProvider>
  );
}

export default App;
