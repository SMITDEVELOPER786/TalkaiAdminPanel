import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { type_constants } from "./Constant";

// const customMiddleware = ...

import userAuthSlice from "./Slice/AuthSlice"



const reducers = combineReducers({
  auth: userAuthSlice,


});

const rootReducer = (state, action) => {
  if (action.type === type_constants.LOGOUT_USER) {
    state = undefined;
  }
  return reducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
 
});
