import React, { useEffect, useState } from "react";
import { useUser, useAuth } from "../../../hooks";
import { CardTecnicos, ModalSetServices, FormServices } from "../../../components/Clientes";
import { Loader } from "semantic-ui-react";
import "./TecnicosDisponibles.scss";

export function TecnicosDisponibles() {
  const [openModal, setOpenModal] = useState(null);
  const [selectedTecnico, setSelectedTecnico] = useState(null);
  const { loading, tecnicos, getTecnicos } = useUser();
  const { auth } = useAuth();

  useEffect(() => {
    getTecnicos();
  }, [])

  const openCloseModal = (tecnico) => {
    setSelectedTecnico(tecnico);
    setOpenModal((prevState) => !prevState);
  };

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
        onClose={() => setOpenModal(false)}
        content={selectedTecnico && (<FormServices tecnico={selectedTecnico} cliente={auth} 
          onClose={() => setOpenModal(false)}/>)}
      />
    </div>
  )
}
