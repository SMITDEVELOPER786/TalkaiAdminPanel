import { createAsyncThunk } from '@reduxjs/toolkit';
import { type_constants } from '../Constant';
import { apiHandle } from "../../Config/Apihandle"


// register_user
export const register_user_post_async = createAsyncThunk(type_constants.REGISTER_USER, async (post_data) => {
  try {
    const response = await apiHandle.post('/users/register', post_data);

    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);




// Login_user
export const login_user_post_async = createAsyncThunk(type_constants.LOGIN_USER, async (post_data) => {
  try {
    const response = await apiHandle.post('/users/login', post_data);

    const res_data = await response.data;
    console.log(res_data)
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);


// Logout user
export const logout_user_post_async = createAsyncThunk(type_constants.LOGOUT_USER, async (post_data) => {
  try {
    const response = await apiHandle.get('/users/logout', post_data);

    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);

// verify otp
export const verify_otp_post_async = createAsyncThunk(type_constants.VERIFY_OTP, async (post_data) => {
  try {
    const response = await apiHandle.post('/users/verify-OTP', post_data);

    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);
