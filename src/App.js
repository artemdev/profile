import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
const LoginPageView = lazy(() => import("./views/LoginPageView"));
const MainPageView = lazy(() => import("./views/MainPageView"));
const ProfileView = lazy(() => import("./views/ProfileView"));
const NavBarView = lazy(() => import("./views/NavBarView"));
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
