import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useServices } from "../../../hooks";
import { TablaServiciosAsignados } from "../../../components/Tecnico";
import "./ServiciosAsignados.scss";

export function ServiciosAsignados() {
  const { loading, servicios, getTecnicoServices } = useServices();

  useEffect(() => {
    getTecnicoServices();
  },[])
 
  return (
    <div className="servicios-asignados">
      <h1 className="title">Servicios asignados</h1>
      {loading ? (
        <Loader active inline="centered" className="loader" />
      ):(
        <TablaServiciosAsignados servicios={servicios}/>
      )}
    </div>
  )
}
