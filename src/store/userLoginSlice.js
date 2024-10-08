import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notification } from "antd";



// Initial state 
const initialState = {

    user: JSON.parse(localStorage.getItem('user')) || null, 
    isLogin: !!localStorage.getItem('token'), 
    loading: false,
    error: null,
};








// Slice
const userLoginSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLogin = true;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isLogin = false;
        },
        logoutUser: (state) => {
            state.user = null; 
            state.loading = false;
            state.error = null;
            state.isLogin = false;
        },
    }
});

// Actions
export const { loginRequest, loginSuccess, loginFailure, logoutUser } = userLoginSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const response = await axios.post("http://localhost:3001/user/login", userData);

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.accessToken);

        dispatch(loginSuccess(response.data));

        notification.success({
            message: "Login Successful",
            description: "You have successfully logged in!",
        });
    } catch (error) {
        dispatch(loginFailure(error.response.data));

        notification.error({
            message: "Login Failed",
            description: "There was an error during login. Please try again.",
        });
    }
};

export const logout = () => (dispatch) => {
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    dispatch(logoutUser());

    notification.success({
        message: "Logout Successful",
        description: "You have been logged out successfully!",
    });
};

export default userLoginSlice.reducer;
