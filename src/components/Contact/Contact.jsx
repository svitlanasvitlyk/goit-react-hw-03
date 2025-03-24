import { ImPhone, ImUser } from "react-icons/im";
import s from "./Contact.module.css";
const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <>
      <div>
        <p className={s.text}>
          <ImUser className={s.icon} />
          {name}
        </p>
        <p className={s.text}>
          <ImPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
