import './SignIn.css';

const SignIn = () => {

  return (

    <div className="sign-in-container">

      <h1 className="sign-in-header">Sign in to socketnose</h1>

      <form className="sign-in-form">

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign In</button>

      </form>

      <h2 className="sign-up-link">New to socketnose? Sign up <a href="/sign-up">here</a></h2>

    </div>

  );
    
};

export default SignIn;