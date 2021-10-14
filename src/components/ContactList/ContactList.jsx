import Contact from "../Contact/Contact";
import { useEffect } from "react";
import style from "./ContactList.module.css";
import { connect } from "react-redux";
import { getAllContacts } from "../../redux/contacts-operations";
import { filteredContacts } from "../../redux/contacts-selectors";
import { getToken } from "../../redux/user-selectors";

function ContactList({ token, contacts, getAllContacts }) {
  useEffect(() => {
    getAllContacts(token);
  }, []);

  return (
    <ul className={style.list}>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  contacts: filteredContacts(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllContacts: (token) => {
    dispatch(getAllContacts(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
