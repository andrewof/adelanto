import React, { useEffect } from "react";
import { useUser } from "../../../hooks";
import { CardTecnicos } from "../../../components/Clientes";
import { Loader } from "semantic-ui-react";
import "./TecnicosDisponibles.scss";

export function TecnicosDisponibles() {
  const { loading, tecnicos, getTecnicos } = useUser();

  useEffect(() => {
    getTecnicos();
  }, [])

  return (
    <div className="tecnicos-disponibles">
      <h1>TecnicosCard</h1>
      {loading ? (
        <Loader />
      ):(
        <CardTecnicos tecnicos={tecnicos}/>
      )}
    </div>
  )
}
