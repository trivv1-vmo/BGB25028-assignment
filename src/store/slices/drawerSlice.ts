import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
type DrawerViews = "MINI_CART" | "SIDE_BAR_MENU";

interface IDrawerState {
  isOpen: boolean;
  view?: DrawerViews;
  data?: any;
  isPageLoading: boolean;
}

const initialState: IDrawerState = {
  isOpen: false,
  isPageLoading: false,
  data: null,
  view: undefined,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (
      state,
      action: PayloadAction<{ view: DrawerViews; data?: any }>
    ) => {
      state.isOpen = true;
      state.view = action.payload.view;
      state.data = action.payload.data;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.view = undefined;
      state.data = null;
    },
    setDrawPageLoader: (state, action: PayloadAction<boolean>) => {
      state.isPageLoading = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, setDrawPageLoader } =
  drawerSlice.actions;

export default drawerSlice.reducer;
