import { TRootState } from "@/lib/store";

export const navbarPositionSelector = (state: TRootState) => {
  return state.appliState.navbarPosition;
};

export const pageOverflowSelector = (state: TRootState) => {
  return state.appliState.pageOverflow;
};
