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

  const openCloseModal = () => setOpenModal((prevState) => !prevState)

  return (
    <div className="tecnicos-disponibles">
      <h1>TecnicosCard</h1>
      {loading ? (
        <Loader active inline="centered" className="loader"/>
      ):(
        <CardTecnicos tecnicos={tecnicos} openModal={openCloseModal}/>
      )}

      <ModalSetServices
        title="Agendar servicio"
        open={openModal} 
        onClose={openCloseModal}
      />
    </div>
  )
}
