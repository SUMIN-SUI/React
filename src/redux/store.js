import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
