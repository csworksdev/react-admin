import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

// import { NavLink, useNavigate } from "react-router-dom";

export const slicer = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: false,
    items: [],
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setItems, setError } = slicer.actions;

export const itemsSelector = (state) => state.items;

export function fetchProduct() {
  return async (dispatch) => {
    axiosInstance
      .get("/products")
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}

export default slicer.reducer;
