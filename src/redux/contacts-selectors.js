import { createSelector } from "reselect";

const getContacts = (state) => {
  return state.contacts.items;
};

const getFilterValue = (state) => {
  return state.contacts.filter;
};

const filteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normilizedFilter = filter.toUpperCase();

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toUpperCase().includes(normilizedFilter)
    );

    return filteredContacts;
  }
);

export { getContacts, filteredContacts };
