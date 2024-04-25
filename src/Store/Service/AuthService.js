import {createAsyncThunk} from '@reduxjs/toolkit';
import { type_constants } from '../Constant';
import { apiHandle } from '../../Config/ApiHandle';



// register_user
export const register_user_post_async = createAsyncThunk(type_constants.REGISTER_USER,async (post_data) => {
      try {
        const response = await apiHandle.post('api/v1/register',post_data);

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
  





 
 