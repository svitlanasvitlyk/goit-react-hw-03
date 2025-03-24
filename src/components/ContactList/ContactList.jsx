import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ initialContacts, onDelete }) => {
  const markup = initialContacts.map((contact) => {
    return (
      <li key={contact.id} className={s.item}>
        <Contact
          handleDelete={onDelete}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      </li>
    );
  });
  return <ul className={s.list}>{markup}</ul>;
};

export default ContactList;
