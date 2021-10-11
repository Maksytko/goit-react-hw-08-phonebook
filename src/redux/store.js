import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducer";

const store = configureStore({
  reducer: contactsReducer,
});

export { store };
