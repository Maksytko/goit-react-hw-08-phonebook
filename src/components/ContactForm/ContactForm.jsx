import { useState } from "react";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts-operations";
import { getContacts } from "../../redux/contacts-selectors";
import { getToken } from "../../redux/user-selectors";

function ContactForm({ token, contacts, addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    addToContactList(name, number);
    setName("");
    setNumber("");
  }

  async function addToContactList(nameForCheck, number) {
    if (
      contacts.find((contact) => {
        return contact.name.toUpperCase() === nameForCheck.toUpperCase();
      })
    ) {
      return alert(`${nameForCheck} is already in contacts!`);
    }
    addContact(token, nameForCheck, number);
  }

  function handleInputChange(event) {
    if (event.currentTarget.name === "name") {
      return setName(event.currentTarget.value);
    }

    setNumber(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label className={style.label}>
        <span>Name</span>
        <input
          className={style.input}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleInputChange}
        />
      </label>
      <label className={style.label}>
        <span>Number</span>
        <input
          className={style.input}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (token, name, number) =>
    dispatch(addContact({ token, name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
