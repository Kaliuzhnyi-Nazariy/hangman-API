export const selectWord = (state: { game: { word: string } }) =>
  state.game.word;
export const selectHint = (state: { game: { hint: string } }) =>
  state.game.hint;
export const selectCategory = (state: { game: { category: string } }) =>
  state.game.category;
export const selectIsLoading = (state: { game: { isLoading: boolean } }) =>
  state.game.isLoading;
export const selectTopics = (state: { categories: { topics: string } }) =>
  state.categories.topics;
