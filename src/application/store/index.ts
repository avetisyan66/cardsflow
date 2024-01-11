import { configureStore } from '@reduxjs/toolkit';
//reducers
import { rootReducer } from "./reducers";

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;