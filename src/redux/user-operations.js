import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://connections-api.herokuapp.com";

const createUser = createAsyncThunk("user/signup", async (profile) => {
  return await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        return res;
      }
      return Promise.reject("Oops!");
    });
});

const loginUser = createAsyncThunk("users/login", async (profile) => {
  return await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        return res;
      }
      return Promise.reject("Oops!");
    });
});

const logoutUser = createAsyncThunk("users/logout", async (token) => {
  await fetch(`${BASE_URL}/users/logout`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
  });
});

export { createUser, loginUser, logoutUser };
