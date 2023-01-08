import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignOut } from "state/auth";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleLogout = () => {
    dispatch(userSignOut());
  };

  return (
    <section>
      <p>Welcome Home</p>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </section>
  );
};

export default Home;
