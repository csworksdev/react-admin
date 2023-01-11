import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

// import { NavLink, useNavigate } from "react-router-dom";

export const slicer = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    create: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { create } = slicer.actions;

export const fetchProduct = () => (dispatch) => {
  //   if (state.product.value) return state.product.value;

  axiosInstance.get("/products").then((response) => {
    dispatch(create(response.data));
    console.log(response.data);
  });
};

export default slicer.reducer;
