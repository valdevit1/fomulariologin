import { useState } from "react";
import * as EmailValidator from "email-validator";
import Alert from "react-bootstrap/Alert";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [alertType, setAlertType] = useState("danger");
  const [alertText, setAlertText] = useState("debe ingresar todos los datos");

  const validar = (e) => {
    e.preventDefault();

    if (!EmailValidator.validate(email)) {
      setAlertText("El correo no es válido");
      return;
    }

    if (password !== passwordConfirmation) {
      setAlertText("* Las contraseñas no coinciden");
      return;
    }
  };

  return (
    <div className="card">
      <h1 className="title">CREA UNA CUENTA</h1>
      <p className="subtitle">o usa tu email para registarte</p>

      <form className="subscription-form" onSubmit={(e) => validar(e)}>
        <div className="input-row">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="input-row">
          <label htmlFor="email">Correo</label>
          <input
            type="text"
            id="email"
            placeholder="Tu correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="input-row">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="input-row">
          <label htmlFor="Confirma Contraseña">Confirma Contraseña</label>
          <input
            type="password"
            placeholder="Confirma Contraseña"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
        </div>

        <div className="button-row">
          <button>Suscríbete</button>
        </div>
      </form>

      <Alert variant={alertType}>{alertText}</Alert>
    </div>
  );
};

export default Form;
