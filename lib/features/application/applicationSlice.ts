import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNavbarPosition = "fixed" | "relative" | "absolute";
type TPageOverflow = "auto" | "hidden";

interface IInitialState {
  navbarPosition: TNavbarPosition;
  pageOverflow: TPageOverflow;
}

const initialState: IInitialState = {
  navbarPosition: "fixed",
  pageOverflow: "auto",
};

const applicatioSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setNavbarPosition: (state, action: PayloadAction<TNavbarPosition>) => {
      state.navbarPosition = action.payload;
    },
    setPageOverflow: (state, action: PayloadAction<TPageOverflow>) => {
      state.pageOverflow = action.payload;
    },
  },
});

export const { setNavbarPosition, setPageOverflow } = applicatioSlice.actions;
export default applicatioSlice.reducer;
