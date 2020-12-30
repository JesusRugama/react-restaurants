import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser, selectRestaurantName } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import Reservations from "./pages/reservations/reservations.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Reports from "./pages/reports/reports.component";

import { GlobalStyle } from "./global.styles";
import LayoutEditor from "./pages/layout-editor/layout-editor";
import CreateRestaurant from "./pages/create-restaurant/create-restaurant.component";

function App({ currentUser, restaurantName, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  let getRedirectionPath = (location) => {
    console.log({currentUser, restaurantName})

    if (location.pathname.includes('signin/restaurant')) {
      if (restaurantName) {
        return '/reservations'
      }
      return currentUser ? null : '/signin';
    }

    if (location.pathname.includes('signin')) {
      if (restaurantName) {
        return '/reservations'
      }else if (currentUser) {
        return '/signin/restaurant'
      }
    } else {
      if (!currentUser) {
        return '/signin'
      }else if (!restaurantName) {
        return '/signin/restaurant'
      }
    };
  }

  return (
    <div className="App">
      <GlobalStyle />
      <RedirectionWrapper redirectTo={getRedirectionPath}>
        <Switch>
          <Route exact path="/signin" component={ SignInAndSignUpPage }></Route>
          <Route exact path="/signin/restaurant" component={ CreateRestaurant }></Route>
          <Route>
            <Header />
            <Switch>
              <Route exact path="/reservations" component={ Reservations } ></Route>
              <Route exact path="/layout-editor" component={ LayoutEditor } ></Route>
              <Route exact path="/reports" component={ Reports } ></Route>
              <Route path="*">
                <Redirect to="/reservations" />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </RedirectionWrapper>
    </div>
  );
}

function RedirectionWrapper({ children, redirectTo, ...rest }) {
  return (
    <Route {...rest}
      render={({ location }) => {
        let redirectPath = redirectTo(location);
        console.log({redirectPath});
        return redirectPath ? <Redirect to={{ pathname: redirectPath, state: { from: location } }} /> : children
      }}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  restaurantName: selectRestaurantName,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
