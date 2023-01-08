import { createSlice } from "@reduxjs/toolkit";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "services/firebase/index";

// import { NavLink, useNavigate } from "react-router-dom";

export const slicer = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user: [],
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = [{}];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = slicer.actions;

export const userSignIn = (email, password) => (dispatch) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      login(userCredential.user);
      dispatch(login(JSON.stringify(userCredential.user)));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const userSignOut = () => (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch(logout());
    })
    .catch((error) => {
      // An error happened.
    });
};

export const isUserLogin = (state) => state.auth.isLogin;

export default slicer.reducer;
