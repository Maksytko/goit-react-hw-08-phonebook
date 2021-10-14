import { createAction } from "@reduxjs/toolkit";

const deleteItem = createAction("items/delete");
const changeFilter = createAction("filter/change");

export { deleteItem, changeFilter };
