import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menu from "@/features/menu";
import contact from "@/features/contact";

export const reducer = combineReducers({
  menu,
  contact,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
