import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...props }) {
  //todo selectors and user managment in state
  const isLoggedIn = false;
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>
  );
}
