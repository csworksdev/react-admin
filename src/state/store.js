import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/index";
import productReducer from "./product/index";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
