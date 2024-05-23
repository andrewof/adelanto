import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks";
import { Spinner } from "react-bootstrap";
import { TablaTecnicos, FormularioModal, TecnicosForm } from "../../../components/Admin";
import { Button } from "semantic-ui-react";
import "./Tecnicos.scss";

export function Tecnicos() {
  const [showModal, setShowModal] = useState(false);
  const { loading, tecnicos, getTecnicos } = useUser();

  const openCloseModal = () => setShowModal((prevState) => !prevState)

  useEffect(() => {
    getTecnicos();
  }, [])

  return (
    <div className="lista-tecnicos">
      <h2 className="title">Técnicos</h2>
      <Button onClick={openCloseModal}>Crear técnico</Button>

      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ):(
        <TablaTecnicos tecnicos={tecnicos}/>
      )}

      <FormularioModal 
        showModal={showModal} 
        onClose={openCloseModal}
        contenido={<TecnicosForm />}
      />
    </div>
  )
}
