import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";
import { categoriesReducer } from "./topicSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    categories: categoriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
