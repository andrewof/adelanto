import React from 'react';
import { LoginForm } from "../../../components/Clientes";
import { useAuth } from "../../../hooks";
import "./LoginHome.scss";

export function LoginHome() {
  const { auth } = useAuth();

  return (
    <div className="login-home">
      <div className="login-admin-content">
        <h1>Iniciar Sesión</h1>
        <LoginForm auth={auth}/>
      </div>
    </div>
  )
}
