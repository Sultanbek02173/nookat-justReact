import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getViewCard } from "../../../shared/api/requests"; 

export const fetchMediaNews = createAsyncThunk(
  "news/media",
  async () => {
    const response = await getViewCard();
    return response.data;
  }
);

const viewCard = createSlice({
  name: "news",
  initialState: {
    card: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMediaNews.fulfilled, (state, action) => {
        state.card = action.payload;
      })
  },
});

export const viewCardReducer = viewCard.reducer;
