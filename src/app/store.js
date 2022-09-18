import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import machineTypeReducer from 'src/features/machine-type/machineTypeSlice';
import machineReducer from 'src/features/machine/machineSlice';

const rootReducer = combineReducers({
  machineTypes: machineTypeReducer,
  machines: machineReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
