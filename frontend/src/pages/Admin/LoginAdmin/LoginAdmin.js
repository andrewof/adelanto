import React from 'react';
import { LoginForm } from "../../../components/Admin";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin-content">
        <h1>Iniciar sesión</h1>
        <LoginForm />
      </div>
    </div>
  )
}
