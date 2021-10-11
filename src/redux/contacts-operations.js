import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllContacts = createAsyncThunk("contacts/getAllContacts", async () => {
  const res = await fetch("http://localhost:3000/contacts").then((res) =>
    res.json()
  );
  console.log(res);
  return res;
});

const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
  await fetch(`http://localhost:3000/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
});

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number, id }) => {
    await fetch(`http://localhost:3000/contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        number,
        id,
      }),
    });
  }
);

export { getAllContacts, deleteContact, addContact };
