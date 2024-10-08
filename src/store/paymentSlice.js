// src/store/paymentSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createPayment = createAsyncThunk(
    'payments/create',
    async (paymentData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3001/payment/create', paymentData);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response.data); 
        }
    }
);

const paymentSlice = createSlice({
    name: 'payments',
    initialState: {
        payment: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPayment.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.payment = action.payload; 
                state.error = null;
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message; 
            });
    },
});

export default paymentSlice.reducer;
