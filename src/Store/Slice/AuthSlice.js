import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../Utils/Async_Status"
import {
 
 
  login_user_post_async,
  logout_user_post_async,
  register_user_post_async,
 } from "../Service/AuthService";

const initialState = {
  // user Register
  user_register_status: asyncStatus.IDLE,
  register_error: null,
  register_user: null,
  register_data: null,

  // user Login
  user_login_status: asyncStatus.IDLE,
  login_error: null,
  login_user: null,
  login_data: null,

  // logout
  user_logout_status: asyncStatus.IDLE,
  logout_error: null,

 

};

const userAuthSlice = createSlice({
  name: "user_auth",
  initialState: initialState,

  reducers: {
    //   setValidateStatusIdle(state, {payload}) {
    //     state.validated_status = asyncStatus.IDLE;
    //   },
    //   setProfile: (state, action) => {
    //     state.profile = action.payload;
    //   },
    //   setLogoutStatus: (state, action) => {
    //     state.check_logout_status = asyncStatus.IDLE;
    //   },
    //   setlogindata: (state, action) => {
    //     state.login_data = null;
    //   },
  },

  extraReducers: (builder) => {
    // User Register
    builder.addCase(register_user_post_async.pending, (state, { payload }) => {
      state.user_register_status = asyncStatus.LOADING;
      state.register_error = null;
    });
    builder.addCase(register_user_post_async.fulfilled,(state, { payload }) => {
        state.user_register_status = asyncStatus.SUCCEEDED;
        state.register_user = payload.success;
        state.register_data = payload.data;
      }
    );
    builder.addCase(register_user_post_async.rejected, (state, actions) => {
      state.user_register_status = asyncStatus.ERROR;
      state.register_error = actions?.error?.message;
      state.register_data = null;
      state.register_user = false;
    });

    // User Login
    builder.addCase(login_user_post_async.pending, (state) => {
      state.user_login_status = asyncStatus.LOADING;
      state.login_error = null;
    });

    builder.addCase(login_user_post_async.fulfilled, (state, { payload }) => {
      state.user_login_status = asyncStatus.SUCCEEDED;
      state.login_user = payload;
      state.login_data = payload.data;
      localStorage.setItem("user_data",JSON.stringify(payload.data));
      // Save token to local storage
      localStorage.setItem("user_Token", payload.token);
    });

    builder.addCase(login_user_post_async.rejected, (state, { error }) => {
      state.user_login_status = asyncStatus.ERROR;
      state.login_error = error ? error.message : "Unknown error";
      state.login_data = null;
      state.login_user = false;
    });

    // logout user

    // Case for logout pending
    builder.addCase(logout_user_post_async.pending, (state) => {
      state.user_logout_status = asyncStatus.LOADING; // Assuming LOADING represents the logout process in progress
    });

    // Case for logout success
    builder.addCase(logout_user_post_async.fulfilled, (state) => {
      state.user_logout_status = asyncStatus.SUCCEEDED; // Assuming SUCCEEDED represents the successful logout

      localStorage.removeItem("user_Token"); // Remove token from local storage
    });

    // Case for logout failure
    builder.addCase(logout_user_post_async.rejected, (state, { error }) => {
      state.user_logout_status = asyncStatus.ERROR; // Assuming ERROR represents a failed logout attempt
      state.logout_error = error ? error.message : "Unknown error"; // Set the logout error message
    });

 

 









  }
  
,
});

export default userAuthSlice.reducer;
