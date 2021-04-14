export default function LoginPageView() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I'm working!");
    // redirect to https://accounts.google.com/o/oauth2/v2/auth
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Type your email <br />
        <input type="email" name="email" /> <br />
      </label>
      <label htmlFor="password">
        Type your password <br />
        <input type="password" name="passowrd" /> <br />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
