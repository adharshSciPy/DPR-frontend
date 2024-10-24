import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./reducer";

export const store = configureStore({
  reducer: {
    projectId: projectReducer,
  },
});

export default store;
