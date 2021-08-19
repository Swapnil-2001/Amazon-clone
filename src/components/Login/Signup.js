import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign Up</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className="login__signInButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
