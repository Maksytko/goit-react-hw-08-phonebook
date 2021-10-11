import Contact from "../Contact/Contact";
import { useEffect } from "react";
import style from "./ContactList.module.css";
import { connect } from "react-redux";
import { getAllContacts } from "../../redux/contacts-operations";
import { filteredContacts } from "../../redux/contacts-selectors";

function ContactList({ contacts, getAllContacts }) {
  useEffect(() => {
    getAllContacts();
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
});

const mapDispatchToProps = (dispatch) => ({
  getAllContacts: () => {
    dispatch(getAllContacts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
