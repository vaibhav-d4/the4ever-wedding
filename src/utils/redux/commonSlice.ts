import { createSlice } from "@reduxjs/toolkit";

export interface CommonState {
  isLoading: boolean;
  websiteTypeId: number;
}

const initialState: CommonState = {
  isLoading: true,
  websiteTypeId: Number(localStorage.getItem("websiteTypeId")) || 1,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
    setWebsiteTypeId: (state, action) => {
      state.websiteTypeId = action.payload;
    },
  },
});

export const { setLoadingState, setWebsiteTypeId } = commonSlice.actions;

export default commonSlice.reducer;
