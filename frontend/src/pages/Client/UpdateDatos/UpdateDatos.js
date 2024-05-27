import React from "react";
import { FormUpdate } from "../../../components/Clientes";
import { useAuth } from "../../../hooks";
import "./UpdateDatos.scss";

export function UpdateDatos() {
  const { auth } = useAuth();

  return (
    <div className="update-datos">
      <div className="update-datos-content">
        <h2>Actualizar información</h2>
        <FormUpdate cliente={auth}/>
      </div>
    </div>
  )
}
