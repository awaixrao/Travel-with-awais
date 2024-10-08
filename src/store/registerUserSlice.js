import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notification } from "antd"; // Import notification from antd


const initialState = {
    user: null,
    loading: false,
    error: null
}

const registerUserSlice = createSlice({
    name: "registerUser",
    initialState,


    reducers: {
        registerRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload; // Store user data on success
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload; // Store error on failure
        },
    }
});

export const { registerRequest, registerSuccess, registerFailure } = registerUserSlice.actions;


export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const response = await axios.post("http://localhost:3001/user/register", userData);
        dispatch(registerSuccess(response.data));
        notification.success({
            message: "User Register Successful",
            description: "You have successfully Registered innnnn!",
        });
    } catch (error) {
        dispatch(registerFailure(error.response.data))

    }
}

export default registerUserSlice.reducer;