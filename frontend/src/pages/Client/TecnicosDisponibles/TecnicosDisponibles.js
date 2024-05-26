import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks";
import { CardTecnicos, ModalSetServices } from "../../../components/Clientes";
import { Loader } from "semantic-ui-react";
import "./TecnicosDisponibles.scss";

export function TecnicosDisponibles() {
  const [openModal, setOpenModal] = useState(null);
  const { loading, tecnicos, getTecnicos } = useUser();

  useEffect(() => {
    getTecnicos();
  }, [])

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <div className="tecnicos-disponibles">
      <h1>TecnicosCard</h1>
      {loading ? (
        <Loader active inline="centered" className="loader"/>
      ):(
        <CardTecnicos tecnicos={tecnicos} openModal={handleOpenModal}/>
      )}

      <ModalSetServices open={openModal}/>
    </div>
  )
}
