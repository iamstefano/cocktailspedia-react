import { useState } from "react";
import { users } from "../../mock/auth";
import "./index.css";

const Contacts = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const [credentialsCond, setCredentialsCond] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCredentialsCond("");

    if (nameInput === users[1].username && passInput === users[1].password) {
      return alert("Benenuto");
    }
    setCredentialsCond(
      `La password di ${nameInput} non è ${passInput} piuttosto è ${users[1].password}`
    );
  };

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNameInput(e.target.value);
        break;
      case "surname":
        setSurnameInput(e.target.value);
        break;
      case "email":
        setEmailInput(e.target.value);
        break;
      case "password":
        setPassInput(e.target.value);
        break;
    }
  };

  return (
    <form className="Contacts" onSubmit={onHandleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Inserisci il tuo nome"
        name="name"
        value={nameInput}
        onChange={onHandleChange}
        required
      />
      {/* <label htmlFor="surname">Cognome</label>
      <input
        type="text"
        placeholder="Inserisci il tuo cognome"
        name="surname"
        value={surnameInput}
        onChange={onHandleChange}
      /> */}
      {/* <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Inserisci la tua email"
        name="email"
        value={emailInput}
        onChange={onHandleChange}
      /> */}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Inserisci la tua password"
        name="password"
        value={passInput}
        onChange={onHandleChange}
      />
      <input type="submit" value="Invia" />

      {credentialsCond && (
        <p className="Contacts__credentialsCond">{credentialsCond}</p>
      )}
    </form>
  );
};

export default Contacts;
