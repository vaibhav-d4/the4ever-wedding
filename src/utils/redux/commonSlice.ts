import {createSlice} from "@reduxjs/toolkit";

export interface CommonState {
  isLoading: boolean;
  isLoggedIn: boolean;
  websiteTypeId: number;
}

const initialState: CommonState = {
  isLoading: true,
  isLoggedIn: false,
  websiteTypeId: Number(localStorage.getItem("websiteTypeId")) || 2
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
      state.isLoading = true;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const {setLoadingState, setWebsiteTypeId, setIsLoggedIn} = commonSlice.actions;

export default commonSlice.reducer;
