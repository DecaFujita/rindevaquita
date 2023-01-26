import { Fragment } from 'react';
import { CssBaseline, GlobalStyles, createTheme, Box } from '@mui/material';
import { globalStyle } from './styles';
import { NavBar } from './components/Navbar.component';
import { Home } from './components/Home.component';
import getDesignTokens from './contexts/Theme.context';
import { ThemeProvider } from '@mui/material/styles';
import { PageProvider } from './contexts/Page.context';

const App = () => {
  const theme = createTheme(getDesignTokens('light'));
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <PageProvider>
          <GlobalStyles styles={globalStyle} />
          <Box sx={container}>
            <NavBar />
            <Home />
          </Box>
        </PageProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;

const container = (theme) => ({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  background: theme.palette.background.default,
});
