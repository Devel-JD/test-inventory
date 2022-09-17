import { configureStore } from '@reduxjs/toolkit';

import machineTypeReducer from 'src/features/machine-type/machineTypeSlice';

export const store = configureStore({
  reducer: {
    machineType: machineTypeReducer,
  },
});

export default store;
