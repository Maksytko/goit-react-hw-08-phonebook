import { deleteItem, changeFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getAllContacts,
  deleteContact,
  addContact,
} from "./contacts-operations";
import { createUser, loginUser, logoutUser } from "./user-operations";

const initialState = {
  user: {
    email: "",
    name: "",
    token: null,
    isLoggedIn: false,
  },
  contacts: {
    items: [],
    filter: "",
  },
  isLoading: false,
  error: null,
};

const contactsReducer = createReducer(initialState.contacts, {
  [getAllContacts.fulfilled]: (contacts, { payload }) => ({
    ...contacts,
    items: [...payload],
  }),

  [addContact.fulfilled]: (contacts, { payload }) => ({
    ...contacts,
    items: [...contacts.items, { ...payload }],
  }),
  [deleteItem]: (contacts, { payload }) => ({
    ...contacts,
    items: contacts.items.filter((item) => item.id !== payload),
  }),
  [changeFilter]: (contacts, { payload }) => ({
    ...contacts,
    filter: payload,
  }),
});

const profileReducer = createReducer(initialState.user, {
  [createUser.fulfilled]: (_, { payload }) => ({
    name: payload.user.name,
    email: payload.user.email,
    token: payload.token,
    isLoggedIn: true,
  }),
  [loginUser.fulfilled]: (_, { payload }) => ({
    name: payload.user.name,
    email: payload.user.email,
    token: payload.token,
    isLoggedIn: true,
  }),
  [logoutUser.fulfilled]: () => ({
    name: "",
    email: "",
    token: null,
    isLoggedIn: false,
  }),
});

// const isLoggedInReducer = createReducer(initialState.isLoading, {
//   [createUser.fulfilled]: () => true,
//   [loginUser.fulfilled]: () => true,
//   [logoutUser.fulfilled]: () => false,
// });

const fetchReducer = createReducer(initialState.isLoading, {
  [getAllContacts.pending]: () => true,
  [getAllContacts.fulfilled]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,

  [createUser.pending]: () => true,
  [createUser.fulfilled]: () => false,

  [loginUser.pending]: () => true,
  [loginUser.fulfilled]: () => false,

  [logoutUser.pending]: () => true,
  [logoutUser.fulfilled]: () => false,
});

const fetchErrorReducer = createReducer(initialState.error, {
  [getAllContacts.rejected]: (_, { payload }) => payload,
  [getAllContacts.fulfilled]: () => null,

  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: () => null,

  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.fulfilled]: () => null,

  [createUser.rejected]: (_, { payload }) => payload,
  [createUser.fulfilled]: () => null,

  [loginUser.rejected]: (_, { payload }) => payload,
  [loginUser.fulfilled]: () => null,

  [logoutUser.rejected]: (_, { payload }) => payload,
  [logoutUser.fulfilled]: () => null,
});

export { contactsReducer, fetchReducer, fetchErrorReducer, profileReducer };
