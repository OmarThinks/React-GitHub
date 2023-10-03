import { configureStore } from "@reduxjs/toolkit";
import type { Theme } from "./features/themeSlice";
import themeSlice, { changeTheme, themeSelector } from "./features/themeSlice";
import ReduxProvider from "./provider";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export { changeTheme, ReduxProvider, themeSelector };
export type { Theme, RootState, AppDispatch };
export default store;
