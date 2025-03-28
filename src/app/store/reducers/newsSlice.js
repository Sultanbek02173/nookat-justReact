import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDetailNews, getNews} from "../../../shared/api/requests";

export const fetchNews = createAsyncThunk("news/allNews", async () => {
  try {
    const { data } = await getNews();            
    return data;
  } catch (error) {
    console.error(error);
  }
});


export const fetchDetailNews = createAsyncThunk("news/detailNews", async (id, thunkAPI) => {
  try {
    const { data } = await getDetailNews(id);            
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    newsDeatil: [],
    isLoading: false,
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(fetchDetailNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetailNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newsDeatil = action.payload;
      })
      .addCase(fetchDetailNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const newsReducer = newsSlice.reducer;
