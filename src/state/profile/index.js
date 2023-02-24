import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const slicer = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    updateProfile: (state, action) => {},
  },
});

export const { updateProfile } = slicer.actions;

export const userDeleteAccount = () => (dispatch) => {
  const user = getAuth().currentUser;

  user
    .delete()
    .then(() => {
      <Navigate to="/signin" replace />;
      window.location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const userUpdateProfile = () => {};

export default slicer.reducer;
