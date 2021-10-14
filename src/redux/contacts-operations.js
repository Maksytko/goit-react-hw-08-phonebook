import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://connections-api.herokuapp.com";

const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (token) => {
    const res = await fetch(`${BASE_URL}/contacts`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }).then((res) => res.json());
    return res;
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async ({ token, id }) => {
    await fetch(`${BASE_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ token, name, number }) => {
    return await fetch(`${BASE_URL}/contacts`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        number,
      }),
    }).then((res) => res.json());
  }
);

export { getAllContacts, deleteContact, addContact };
