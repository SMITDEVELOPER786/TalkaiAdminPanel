import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../Utils/Async_Status"
import { create_assistant, user_buy_phone_post_async, user_get_phone_post_async } from "../Service/PhoneService";
 

const initialState = {
  // get phone
  get_phone_statue: asyncStatus.IDLE,
  get_phone_error: null,
  get_phone_data: null,



  // buy phone
buy_phone_status:asyncStatus.IDLE,
buy_phone_error:null,
buy_phone_data:null,



  // create assistant
  create_assistant_status:asyncStatus.IDLE,
  create_assistant_error:null,
  create_assistant_data:null,
  
  






};

const userPhoneSlice = createSlice({
  name: "get_phone",
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
    // get phone number
    builder.addCase(user_get_phone_post_async.pending, (state, { payload }) => {
      state.get_phone_statue = asyncStatus.LOADING;
      state.get_phone_error = null;
    });
    builder.addCase(user_get_phone_post_async.fulfilled,(state, { payload }) => {
        state.get_phone_statue = asyncStatus.SUCCEEDED;
         state.get_phone_data = payload.data;
        // localStorage.setItem("user_Token", payload.token);

      }
    );
    builder.addCase(user_get_phone_post_async.rejected, (state, actions) => {
      state.get_phone_statue = asyncStatus.ERROR;
      state.get_phone_error = actions?.error?.message;
      state.get_phone_data = null;
     });

    
// create assistant
 
builder.addCase(create_assistant.pending, (state, { payload }) => {
    state.create_assistant_status = asyncStatus.LOADING;
    state.create_assistant_error = null;
  });
  builder.addCase(create_assistant.fulfilled,(state, { payload }) => {
      state.create_assistant_status = asyncStatus.SUCCEEDED;
       state.create_assistant_data = payload.data;
      // localStorage.setItem("user_Token", payload.token);

    }
  );
  builder.addCase(create_assistant.rejected, (state, actions) => {
    state.create_assistant_status = asyncStatus.ERROR;
    state.create_assistant_error = actions?.error?.message;
    state.create_assistant_data = null;
   });



// buy phone number
 
builder.addCase(user_buy_phone_post_async.pending, (state, { payload }) => {
  state.buy_phone_status = asyncStatus.LOADING;
  state.buy_phone_error = null;
});
builder.addCase(user_buy_phone_post_async.fulfilled,(state, { payload }) => {
    state.buy_phone_status = asyncStatus.SUCCEEDED;
     state.buy_phone_data = payload.data;
    // localStorage.setItem("user_Token", payload.token);

  }
);
builder.addCase(user_buy_phone_post_async.rejected, (state, actions) => {
  state.buy_phone_status = asyncStatus.ERROR;
  state.buy_phone_error = actions?.error?.message;
  state.buy_phone_data = null;
 });





  }
  
,
});

export default userPhoneSlice.reducer;
