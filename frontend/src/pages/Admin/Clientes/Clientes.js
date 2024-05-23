import React, { useEffect } from "react";
import { useUser } from "../../../hooks";
import { Spinner } from "react-bootstrap";
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
        <Spinner animation="grow" variant="primary" />
      ):(
        <TablaClientes clientes={clientes}/>
      )}
    </div>
  )
}
