import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const machineSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {
    add: (state, action) => {
      if (Array.isArray(state[action.payload])) state[action.payload].push({ id: Date.now() });
      else state[action.payload] = [{ id: Date.now() }];
    },
    remove: (state, action) => {
      state[action.payload.machineTypeId].splice(action.payload.index, 1);
    },
    update: (state, action) => {
      console.log('hello', action);
      state[action.payload.machineTypeId][action.payload.index] = {
        ...state[action.payload.machineTypeId][action.payload.index],
        ...action.payload.data,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, update } = machineSlice.actions;

export default machineSlice.reducer;
