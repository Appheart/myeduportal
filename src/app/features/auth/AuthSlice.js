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
  reducers: {
    login: (state) => {
      state.userName = 'newUser';
    },
  },
});

// console.log(authSlice);

export const { login } = authSlice.actions;
export default authSlice.reducer;
