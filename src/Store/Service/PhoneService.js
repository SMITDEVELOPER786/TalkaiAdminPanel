import { createAsyncThunk } from '@reduxjs/toolkit';
import { type_constants } from '../Constant';
import { api, apiHandle, apiHandle1 } from "../../Config/Apihandle"
import axios from 'axios';


// get phone number
export const user_get_phone_post_async = createAsyncThunk(type_constants.GET_PHONE, async (post_data) => {
  try {
    const response = await apiHandle.post('/phone/get-phone', post_data);

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


// buy phone number
export const user_buy_phone_post_async = createAsyncThunk(type_constants.BUY_PHONE, async (post_data) => {
  try {
    const response = await apiHandle.post('/phone/buy-phone', post_data);

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




// CREATE ASSISTANT

export const create_assistant = createAsyncThunk(type_constants.CREATE_ASSISTANT, async (post_data) => {
  try {
    const response = await api.post('/assistant/create', post_data);

    const res_data = await response.data;
    return res_data;

  } catch (error) {
    console.log(error);
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);


export const getAssistant = createAsyncThunk(type_constants.GET_ASSISTANT, async () => {
  try {
    const response = await api.get("/assistant/get")
    const res_data = await response.data.data;
    console.log(res_data)

    return res_data;


  } catch (error) {
    console.log(error);
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
})
