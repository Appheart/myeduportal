import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  name: '',
  level: '',
  department: '',
  institution: '',
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

// console.log(authSlice);

export default authSlice.reducer;
