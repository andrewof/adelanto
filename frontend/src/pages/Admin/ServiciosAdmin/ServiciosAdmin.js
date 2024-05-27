import React, { useEffect } from "react";
import { useServices } from "../../../hooks";
import { TablaServicios } from "../../../components/Admin";
import { Loader } from "semantic-ui-react";
import "./ServiciosAdmin.scss";

export function ServiciosAdmin() {
  const { loading, servicios, getServices } = useServices();

  useEffect(() => {
    getServices();
  }, [])

  return (
    <div className="lista-servicios-admin">
      <h2 className="title">Servicios Registrados</h2>
      {loading ? (
        <Loader active inline="centered" className="loader" />
      ):(
        <TablaServicios servicios={servicios}/>
      )}
    </div>
  )
}
