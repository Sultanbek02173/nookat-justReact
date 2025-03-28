import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/count";
import { galleryReducer } from "./reducers/gallerySlice";
import { viewCardReducer } from "./reducers/viewSlice";
import { newsReducer } from "./reducers/newsSlice";
import visuallyReducer from "./reducers/visually";
import { districtSliceReducer } from "./reducers/districts";
import { settingReducer } from "./reducers/settingsSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    gallery: galleryReducer,
    card: viewCardReducer,
    news: newsReducer,
    visually: visuallyReducer,
    card: viewCardReducer, 
    news: newsReducer,
    district: districtSliceReducer,
    setting: settingReducer,
  },
});
