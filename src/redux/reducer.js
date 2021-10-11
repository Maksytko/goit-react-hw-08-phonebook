import { deleteItem, changeFilter, addItem } from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getAllContacts,
  deleteContact,
  addContact,
} from "./contacts-operations";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
  isLoading: false,
  error: null,
};

const contactsReducer = createReducer(initialState, {
  [getAllContacts.fulfilled]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      items: [...payload],
    },
  }),

  [addItem]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      items: [...contacts.items, payload],
    },
  }),
  [deleteItem]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      items: contacts.items.filter((item) => item.id !== payload),
    },
  }),
  [changeFilter]: ({ contacts }, { payload }) => ({
    contacts: {
      ...contacts,
      filter: payload,
    },
  }),
});

const fetchReducer = createReducer(initialState, {
  [getAllContacts.pending]: () => true,
  [getAllContacts.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
});

const fetchErrorReducer = createReducer(initialState, {
  [getAllContacts.rejected]: (_, { payload }) => payload,
  [getAllContacts.fulfilled]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.fulfilled]: () => null,
});

export default combineReducers({
  contacts: contactsReducer,
  isLoading: fetchReducer,
  error: fetchErrorReducer,
});
