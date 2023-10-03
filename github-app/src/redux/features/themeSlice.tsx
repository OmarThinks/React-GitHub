import { RootState } from "@redux";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";
const defaultTheme: {
  value: Theme;
} = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: defaultTheme,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

const { changeTheme } = themeSlice.actions;
const themeSelector = (state: RootState) => state.theme.value;

export { changeTheme, themeSelector };
export default themeSlice;
