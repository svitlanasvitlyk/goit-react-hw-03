import { useState } from "react";

import styles from "./App.module.css";
import ContactForm from "../ContactForm";
import SearchBox from "../SearchBox";
import ContactList from "../ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  return (
    <div className={container}>
      <h1>Phonebook</h1>
    </div>
  );
};

export default App;
