import { createSlice } from "@reduxjs/toolkit";
import { getRandomWord, getWordByTopic } from "./axiosOperations";

interface IInitialState {
  word: string;
  hint: string;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  word: "",
  hint: "",
  isLoading: false,
  error: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getRandomWord.fulfilled,
        (state, action: PayloadAction<{ word: string; hint: string }>) => {
          state.word = action.payload.word;
          state.hint = action.payload.hint;
          state.isLoading = false;
        }
      )
      .addCase(getWordByTopic.fulfilled, (state, action) => {
        state.word = action.payload.word;
        state.hint = action.payload.hint;
        state.isLoading = false;
      });
  },
});
export const gameReducer = gameSlice.reducer;
