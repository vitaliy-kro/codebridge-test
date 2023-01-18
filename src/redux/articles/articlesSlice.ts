import { createSlice } from "@reduxjs/toolkit";
import { ArticlesState } from "./interfaces";
import { fetchArticles } from "./operations";

const initialState: ArticlesState = {
  items: [],
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articlesReducer = articlesSlice.reducer;
