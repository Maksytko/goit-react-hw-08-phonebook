import { connect } from "react-redux";
import style from "./Contact.module.css";
import { deleteItem } from "../../redux/actions";
import { deleteContact } from "../../redux/contacts-operations";
import { getToken } from "../../redux/user-selectors";

function Contact({ token, contact, deleteItem, deleteContact }) {
  async function onHandleButtonClick(id) {
    deleteContact(token, id);
    deleteItem(id);
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

const mapStateToProps = (state) => ({
  token: getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  deleteContact: (token, id) => dispatch(deleteContact({ token, id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
