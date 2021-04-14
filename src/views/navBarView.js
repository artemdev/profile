import routes from "../../helpers/routes";
export default function NavBarView() {
  return (
    <header>
      <ul>
        <li>
          <a href="/">To the main page</a>
          <a href="/profile">Profile</a>
          <a href={routes.google_url}>Login</a>
        </li>
      </ul>
    </header>
  );
}
