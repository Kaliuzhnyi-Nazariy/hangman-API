import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RandomWord, getRandomWord, getWordByTopic } from "./axiosOperations";

export interface IInitialState {
  word: string;
  hint: string;
  category: string;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  word: "",
  hint: "",
  category: "",
  isLoading: false,
  error: "",
};

const handlePending = (state: { isLoading: boolean; error: string }) => {
  state.isLoading = true;
  state.error = "";
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomWord.pending, handlePending)
      .addCase(
        getRandomWord.fulfilled,
        (state, action: PayloadAction<RandomWord>) => {
          state.word = action.payload.word;
          state.hint = action.payload.hint;
          state.category = action.payload.category;
          state.isLoading = false;
        }
      )
      .addCase(getWordByTopic.pending, handlePending)
      .addCase(
        getWordByTopic.fulfilled,
        (
          state,
          action: PayloadAction<{
            word: string;
            hint: string;
            category: string;
          }>
        ) => {
          state.word = action.payload.word;
          state.hint = action.payload.hint;
          state.category = action.payload.category;
          state.isLoading = false;
        }
      );
  },
});

export const gameReducer = gameSlice.reducer;
