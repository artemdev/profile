import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
const LoginPageView = lazy(() => import("./views/loginPageView"));
const MainPageView = lazy(() => import("./views/mainPageView"));
const ProfileView = lazy(() => import("./views/profileView"));
const NavBarView = lazy(() => import("./views/navBarView"));

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Suspense fallback="Loading...">
            <NavBarView />
            <PublicRoute exact path="/">
              <MainPageView />
            </PublicRoute>
            <PrivateRoute exact path="/profile">
              <ProfileView />
            </PrivateRoute>

            <PublicRoute exact path="/login">
              <LoginPageView />
            </PublicRoute>
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}
