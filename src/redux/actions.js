import { v4 as uuidv } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const prepareAction = (name, number, id) => {
  return {
    payload: {
      name,
      number,
      id,
    },
  };
};

const addItem = createAction("items/add", prepareAction);
const deleteItem = createAction("items/delete");
const changeFilter = createAction("filter/change");

// const request = createAction("items/fetchContactsRequest");
// const success = createAction("items/fetchContactsSuccess");
// const error = createAction("items/fetchContactsError");

export { deleteItem, changeFilter, addItem };
