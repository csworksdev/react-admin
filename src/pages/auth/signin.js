import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services/firebase/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignIn } from "state/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(userSignIn(email, password));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <p> FocusApp </p>

        <form>
          <div>
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button onClick={onLogin}>Login</button>
          </div>
        </form>

        <p className="text-sm text-white text-center">
          No account yet? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </>
  );
};

export default SignIn;
