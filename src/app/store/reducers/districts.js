import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDestricts } from "../../../shared/api/requests"; 

export const fetchDistricts = createAsyncThunk("district/type_information", async () => {
    try {
      const { data } = await getDestricts();            
      return data;
    } catch (error) {
      console.error(error);
    }
});


const districtSlice = createSlice({
  name: "district",
  initialState: {
    district: [],
    isLoading: false,
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchDistricts.pending, (state) => {
        state.isLoading = true;
    })
        .addCase(fetchDistricts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.district = action.payload;
    })
        .addCase(fetchDistricts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
    })
  },
});

export const districtSliceReducer = districtSlice.reducer;
