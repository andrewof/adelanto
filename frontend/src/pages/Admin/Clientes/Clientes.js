import React, { useEffect } from "react";
import { useUser } from "../../../hooks";
import { Loader } from "semantic-ui-react";
import { TablaClientes } from "../../../components/Admin";
import "./Clientes.scss";

export function Clientes() {
  const { loading, clientes, getClientes } = useUser();

  useEffect(() => {
    getClientes()
  }, [])

  return (
    <div className="lista-clientes">
      <h2 className="title">Clientes</h2>
      {loading ? (
        <Loader active inline="centered" className="loader"/>
      ):(
        <TablaClientes clientes={clientes}/>
      )}
    </div>
  )
}
