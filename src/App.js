import React from "react";
import { Switch, Route } from "react-router-dom";
// Firebase
import { auth } from "./firebase/firebase.utils";
// Components
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
// CSS
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  // This is how we handle our application being aware of any auth changes on firebase:
  unsubscribeFromAuth = null;

  // We don't actually have to manually fetch every time we want to check
  // if the (user) status changed. This connection is always open as long as
  // ourcomponent is mounted on our DOM.
  componentDidMount() {
    // Adds an observer for changes to the user's sign-in state.
    // Prior to 4.0.0, this triggered the observer when users were signed in,
    // signed out, or when the user's ID token changed in situations such as token expiry or password change.
    // After 4.0.0, the observer is only triggered on sign-in or sign-out.
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  // So because it's an open subscription we also have to close subscriptions when
  // this (App) un mounts, because we don't want any memory leaks in our JavaScript application.
  componentWillUnmount() {
    // And this will close the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signin">
            <SignInAndSignUpPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
