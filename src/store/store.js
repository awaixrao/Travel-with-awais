import { configureStore } from '@reduxjs/toolkit';
import registerUserReducer from './registerUserSlice';
import userLoginReducer from './userLoginSlice';
import tourReducer from './tourSlice'; 
import bookingReducer from './bookingSlice';
import paymentReducer from './paymentSlice';

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    registerUser: registerUserReducer,
    tours: tourReducer, 
    bookings: bookingReducer,
    payments: paymentReducer,
  },
});
