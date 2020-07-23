import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Home from './pages/Home';
import Main from './pages/Main';

const RootDiv = styled.div`
  height : 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
  }
`;

const App = () => {
  return(
    <React.Fragment>
      <GlobalStyle />
      <RootDiv>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/main" component = {Main} />
        </Switch>
      </RootDiv>
    </React.Fragment>
  )
}

export default App;