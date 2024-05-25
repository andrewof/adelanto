import React from 'react';
import { LoginForm } from "../../../components/Clientes";
import "./LoginHome.scss";

export function LoginHome() {
  return (
    <div className="login-home">
      <div className="login-admin-content">
        <h1>LoginHome</h1>
        <LoginForm />
      </div>
    </div>
  )
}
