import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = true;
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
