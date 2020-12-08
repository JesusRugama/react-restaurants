import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Reservations from './pages/reservations/reservations.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Reservations} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
