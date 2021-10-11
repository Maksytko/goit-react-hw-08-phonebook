import { useState } from "react";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions";
import { v4 as uuidv } from "uuid";
import { addContact } from "../../redux/contacts-operations";
import { getContacts } from "../../redux/contacts-selectors";

function ContactForm({ contacts, addItem, addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    setName("");
    setNumber("");
    addToContactList(name, number);
  }

  function addToContactList(nameForCheck, number) {
    if (
      contacts.find((contact) => {
        return contact.name === nameForCheck;
      })
    ) {
      return alert(`${nameForCheck} is already in contacts!`);
    }
    const id = uuidv();
    addContact(nameForCheck, number, id);

    return addItem(nameForCheck, number, id);
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

const mapStateToProps = (state) => {
  return {
    contacts: getContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (name, number, id) => dispatch(addItem(name, number, id)),
  addContact: (name, number, id) => dispatch(addContact({ name, number, id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
