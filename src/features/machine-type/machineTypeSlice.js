import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const machineTypeSlice = createSlice({
  name: 'machineType',
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = machineTypeSlice.actions;

export default machineTypeSlice.reducer;
