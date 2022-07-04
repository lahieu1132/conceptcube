import { configureStore } from "@reduxjs/toolkit";
import worksReducer from './worksSlice';

export const store = configureStore({
    reducer: {
        datas: worksReducer,
    },
  })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;