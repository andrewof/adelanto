import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks";
import { TablaTecnicos, FormularioModal, TecnicosForm } from "../../../components/Admin";
import { Button, Loader } from "semantic-ui-react";
import "./Tecnicos.scss";

export function Tecnicos() {
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const { loading, tecnicos, getTecnicos, deleteTecnico } = useUser();

  
  useEffect(() => {
    getTecnicos();
  }, [refetch])
  
  const openCloseModal = () => setShowModal((prevState) => !prevState)
  const onRefetch = () => setRefetch((prev) => !prev);

  const addTecnico = () => {
    setTitleModal("Registrar Técnico");
    setContentModal(<TecnicosForm onClose={openCloseModal} onRefetch={onRefetch} titleBtn="Registrar"/>);
    openCloseModal();
  }

  const updateTecnico = (data) => {
    setTitleModal("Actualizar Técnico");
    setContentModal(<TecnicosForm onClose={openCloseModal} onRefetch={onRefetch} titleBtn="Actualizar" tecnico={data}/>)
    openCloseModal();
  }

  const deleteTecnicos = async (data) => {
    const result = window.confirm(`¿Eliminar usuario ${data.email}?`)

    if (result) {
      try {
        await deleteTecnico(data.id)
        onRefetch();
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="lista-tecnicos">
      <h2 className="title">Técnicos</h2>
      <Button onClick={addTecnico}>Crear técnico</Button>

      {loading ? (
        <Loader active inline="centered"/>
      ):(
        <TablaTecnicos tecnicos={tecnicos} updateTecnico={updateTecnico} deleteTecnico={deleteTecnicos}/>
      )}

      <FormularioModal
        title={titleModal}
        showModal={showModal} 
        onClose={openCloseModal}
        contenido={contentModal}
      />
    </div>
  )
}
