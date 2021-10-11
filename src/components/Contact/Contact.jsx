import { connect } from "react-redux";
import style from "./Contact.module.css";
import { deleteItem } from "../../redux/actions";
import { deleteContact } from "../../redux/contacts-operations";

function Contact({ contact, deleteItem, deleteContact }) {
  async function onHandleButtonClick(id) {
    deleteItem(id);
    deleteContact(id);
  }

  return (
    <li className={style.item}>
      {contact.name}: {contact.number}
      <button
        type="button"
        id={contact.id}
        onClick={() => onHandleButtonClick(contact.id)}
      >
        Удалить
      </button>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
