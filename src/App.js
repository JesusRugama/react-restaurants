import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import Reservations from "./pages/reservations/reservations.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { GlobalStyle } from "./global.styles";
import LayoutEditor from "./pages/layout-editor/layout-editor";

function ConditionalRoute({
  component: Component,
  condition,
  redirectPath,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        condition ? (
          <Component {...props} />
        ) : (
          redirectPath && <Redirect
            to={{ pathname: redirectPath, state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function App({currentUser}) {
  console.log({currentUser})
  return (
    <div className="App">
      <GlobalStyle />
      <Route
        render={(props) =>
          props.location.pathname !== "/signin" && <Header></Header>
        }
      />
      <Switch>
        <ConditionalRoute
          exact
          path="/reservations"
          redirectPath="/signin"
          condition={!!currentUser}
          component={Reservations}
        />
        <ConditionalRoute
          exact
          path="/layout"
          redirectPath="/signin"
          condition={!!currentUser}
          component={LayoutEditor}
        />
        <ConditionalRoute
          exact
          path="/reports"
          redirectPath="/signin"
          condition={!!currentUser}
          component={LayoutEditor}
        />
        <ConditionalRoute
          exact
          path="/signin"
          redirectPath="/reservations"
          condition={!currentUser}
          component={SignInAndSignUpPage}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);