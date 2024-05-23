import React, { useEffect } from "react";
import { useUser } from "../../../hooks";
import { Spinner } from "react-bootstrap";
import { TablaTecnicos } from "../../../components/Admin";
import { Button } from "semantic-ui-react";
import "./Tecnicos.scss";

export function Tecnicos() {
  const { loading, tecnicos, getTecnicos } = useUser();

  useEffect(() => {
    getTecnicos();
  }, [])

  return (
    <div className="lista-tecnicos">
      <h2 className="title">Técnicos</h2>
      <Button>Crear técnico</Button>

      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ):(
        <TablaTecnicos tecnicos={tecnicos}/>
      )}
    </div>
  )
}
