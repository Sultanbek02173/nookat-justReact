import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGlobalSettings } from "../../../shared/api/requests";

export const fetchSettings = createAsyncThunk('settings/setting', async () => {
    try {
        const { data } = await getGlobalSettings();            
        return data;
    } catch (error) {
        console.error(error);
    }
})

const settingSlice = createSlice({
    name: "setting",
    initialState: {
        setting: [],
        isLoading: false,
        isError: "",
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(fetchSettings.pending, (state) => {
        state.isLoading = true;
        })
        .addCase(fetchSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.setting = action.payload;
        })
        .addCase(fetchSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        })
    },
})

export const settingReducer = settingSlice.reducer;