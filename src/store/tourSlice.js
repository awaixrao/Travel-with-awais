import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  loading: false,
  tours: [],         
  tour: null,
  error: null,       
};

// Create slice
const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    fetchToursRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchToursSuccess: (state, action) => {
      state.loading = false;
      state.tours = action.payload;  
    },
    fetchToursFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTourByIdRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTourByIdSuccess: (state, action) => {
      state.loading = false;
      state.tour = action.payload;   
    },
    fetchTourByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

// Actions
export const {
  fetchToursRequest,
  fetchToursSuccess,
  fetchToursFailure,
  fetchTourByIdRequest,
  fetchTourByIdSuccess,
  fetchTourByIdFailure,
} = tourSlice.actions;

export const fetchAllTours = () => async (dispatch) => {
  try {
    dispatch(fetchToursRequest());

    const response = await axios.get('http://localhost:3001/tour/all'); 
    
    dispatch(fetchToursSuccess([...response.data.ongoingTours, ...response.data.upcomingTours]));
    
  } catch (error) {
    dispatch(fetchToursFailure(error.response?.data?.message || 'Failed to fetch tours'));
  }
};

export const fetchTourById = (id) => async (dispatch) => {
  try {
    dispatch(fetchTourByIdRequest());

    const response = await axios.get(`http://localhost:3001/tour/get/${id}`); 
    dispatch(fetchTourByIdSuccess(response.data));

  } catch (error) {
    dispatch(fetchTourByIdFailure(error.response?.data?.message || 'Failed to fetch tour details'));
  }
};

// Export reducer
export default tourSlice.reducer;
