import React from "react";
import { RegisterForm } from "../../../components/Clientes";
import "./RegisterHome.scss";

export function RegisterHome() {
  return (
    <div className="register-home">
      <div className="register-home-content">
        <h2>Registrarse</h2>
        <RegisterForm />
      </div>
    </div>
  )
}
