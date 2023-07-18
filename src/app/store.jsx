import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    login: loginReducer,
  },
});
