import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError, Article } from "./interfaces";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/";

export const fetchArticles = createAsyncThunk<Article[], string>(
  "articles/fetchByTitle",
  async (value, thunkAPI) => {
    try {
      const trimmedValue = value.trim();
      if (!trimmedValue.length) {
        return [];
      }
      const response = await axios.get(
        `/v3/articles?title_contains=${trimmedValue}`
      );
      return response.data;
    } catch (error) {
      const result = error as APIError;
      return thunkAPI.rejectWithValue(result.message);
    }
  }
);
