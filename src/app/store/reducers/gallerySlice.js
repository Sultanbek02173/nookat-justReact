import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGalleryArchivalPhotos,
  getGalleryNewShapes,
  getGalleryOshTour,
} from "../../../shared/api/requests";


export const fetchNewShapes = createAsyncThunk(
  "gallery/fetchNewShapes",
  async () => {
    const { data } = await getGalleryNewShapes(); 

    return data;
  }
);

export const fetchOshTour = createAsyncThunk(
  "gallery/fetchOshTour",
  async () => {
    const { data } = await getGalleryOshTour(); 

    return data;
  }
);
export const fetchArchivalPhotos = createAsyncThunk(
    "gallery/fetchArchivalPhotos",
    async () => {
      const { data } = await getGalleryArchivalPhotos();

      return data;
    }
  );


const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    archivalPhotos: [],
    newShapes: [],
    oshTour: [],
    isLoading: false,
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArchivalPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArchivalPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.archivalPhotos = action.payload;
      })
      .addCase(fetchArchivalPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(fetchNewShapes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewShapes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newShapes = action.payload;
      })
      .addCase(fetchNewShapes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(fetchOshTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOshTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oshTour = action.payload;
      })
      .addCase(fetchOshTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const galleryReducer = gallerySlice.reducer;
