import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignOut } from "state/auth";
import { Divider, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        redirect("/");
      }
    });
  });

  const handleLogout = () => {
    dispatch(userSignOut());
  };

  return (
    <section>
      <p>Welcome Home</p>

      <div>
        <button onClick={handleLogout}>Logout</button>

        <Typography variant="h1">h1</Typography>
        <Divider />
        <Typography variant="h2">h2</Typography>
        <Divider />
        <Typography variant="h3">h3</Typography>
        <Divider />
        <Typography variant="h4">h4</Typography>
        <Divider />
        <Typography variant="h5">h5</Typography>
        <Divider />
        <Typography variant="h6">h6</Typography>
        <Divider />
        <Typography variant="subtitle1">subtitle1</Typography>
        <Divider />
        <Typography variant="subtitle2">subtitle2</Typography>
        <Divider />
        <Typography variant="body1">body1</Typography>
        <Divider />
        <Typography variant="body2">body2</Typography>
        <Divider />
        <Typography variant="button">button</Typography>
        <Divider />
        <Typography variant="caption">caption</Typography>
        <Divider />
        <Typography variant="overline">overline</Typography>
        <Divider />
      </div>
    </section>
  );
};

export default Home;
