import React, { useEffect } from "react";
import { TablaServicios } from "../../../components/Clientes";
import { Loader } from "semantic-ui-react";
import { useServices } from "../../../hooks";
import "./Servicios.scss";

export function Servicios() {
  const { loading, servicios, getClienteServices } = useServices();

  useEffect(() => {
    getClienteServices();
  }, [])

  return (
    <div className="lista-servicios">
      <h2 className="title">Servicios</h2>
      {loading ? (
        <Loader active inline="centered" className="loader" />
      ):(
        <TablaServicios servicios={servicios}/>
      )}
    </div>
  )
}
