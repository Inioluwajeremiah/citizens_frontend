import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSliceReducer from "./slices/authSlice";
import { apiSlice } from "./apiSlice/apiSlice";

const persistConfig = {
  key: "root",
  storage,
};

// Wrap the auth reducer in persistReducer with typed configuration
const persistedAuthReducer = persistReducer(persistConfig, authSliceReducer);

// Configure the store with the typed reducers and middlewares
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

// Export the persistor and store
export const persistor = persistStore(store);
export default store;

// Define types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedAuthReducer = persistReducer(persistConfig, authSliceReducer);

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     // cart: cartSliceReducer,
//     auth: persistedAuthReducer,
//   },
//   middleware: (getDefaultMiddleWare) =>
//     getDefaultMiddleWare().concat(apiSlice.middleware),
//   devTools: true,
// });
// export const persistor = persistStore(store);
// export default store;
