import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import StyledApp from './components/styled/App.styled';
import GlobalStyle from './components/styled/GlobalStyles';
import { darkTheme } from './themes';
import React, { useContext } from 'react';
import Signup from './components/Signup';
import { UserContext } from './components/UserContext';
import SignedInApp from './components/SignedInApp';

function App() {
  const user = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user.loggedIn === null ? (
            ''
          ) : user.loggedIn === true ? (
            <SignedInApp />
          ) : (
            <Signup />
          )}
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
