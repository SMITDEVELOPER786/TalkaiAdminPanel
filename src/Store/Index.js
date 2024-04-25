import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { type_constants } from "./Constant";

// const customMiddleware = ...

const reducers = combineReducers({


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
