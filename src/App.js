import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";

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

            <PrivateRoute exact path="/">
              <ProfileView />
            </PrivateRoute>

            <PublicRoute exact path="/login" restricted>
              <MainPageView />
            </PublicRoute>
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}
