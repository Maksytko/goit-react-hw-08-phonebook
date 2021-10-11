import { createSelector } from "reselect";

const getContacts = (state) => {
  return state.contacts.contacts.items;
};

const getFilterValue = (state) => {
  return state.contacts.contacts.filter;
};

// const filteredContacts = (state) => {
//   const filteredContacts = getContacts(state).filter((contact) =>
//     contact.name
//       .toUpperCase()
//       .includes(state.contacts.contacts.filter.toUpperCase())
//   );

//   return filteredContacts;
// };

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
