import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const machineTypeSlice = createSlice({
  name: 'machineTypes',
  initialState,
  reducers: {
    add: (state) => {
      state.push({ id: Date.now(), fields: [] });
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
    },
    update: (state, action) => {
      console.log(action);
      state[action.payload.index] = { ...state[action.payload.index], ...action.payload.data };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, update } = machineTypeSlice.actions;

export default machineTypeSlice.reducer;
