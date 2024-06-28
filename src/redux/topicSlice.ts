import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Categories, receiveCategories } from "./axiosOperations";

export interface ITopicState {
  topics: Categories;
  isLoading: boolean;
}

const initialState: ITopicState = {
  topics: [],
  isLoading: false,
};

const handlePending = (state: { isLoading: boolean }) => {
  state.isLoading = true;
};

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(receiveCategories.pending, handlePending);
    builder.addCase(
      receiveCategories.fulfilled,
      (state: ITopicState, action: PayloadAction<string[]>) => {
        state.topics = action.payload.map((topic) => topic);
        state.isLoading = false;
      }
    );
  },
});

export const categoriesReducer = topicSlice.reducer;
