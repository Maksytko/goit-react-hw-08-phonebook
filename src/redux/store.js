import { configureStore } from "@reduxjs/toolkit";
import {
  contactsReducer,
  fetchReducer,
  fetchErrorReducer,
  profileReducer,
} from "./reducer";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigForUser = {
  key: "user",
  storage,
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    isLoading: fetchReducer,
    error: fetchErrorReducer,
    user: persistReducer(persistConfigForUser, profileReducer),
  },
});

const persistor = persistStore(store);

export { store, persistor };
