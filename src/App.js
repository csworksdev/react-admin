import Layout from "layout/layout";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignOut } from "state/auth";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userSignOut());
  };
  return (
    <Layout>
      <div className="container">
        <p>Welcome Home</p>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </Layout>
  );
};

export default App;
