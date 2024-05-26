import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { map } from "lodash";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import "./CardTecnicos.scss";

export function CardTecnicos({ tecnicos, openModal }) {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleClick = (tecnico) => {
    if (auth) {
      console.log("Agendando");
      openModal(tecnico);
    } else {
      navigate("/login")
    }
  }

  return (
    <Card.Group className="custom-card-group">
      {map(tecnicos, (tecnico, index) => (
        <Card key={index} className="card-custom">
          <Image src={tecnico.image}/>
          <Card.Content>
            <Card.Header className="card-header">{tecnico.first_name} {tecnico.last_name}</Card.Header>
            <Card.Description className="card-description"><strong>Profesión:</strong> {tecnico.profesion}</Card.Description>
            <Card.Description className="card-description"><strong>Experiencia:</strong> {tecnico.experiencia} años</Card.Description>
            <Button content="Agendar" className="btn-card-tecnicos" onClick={() => handleClick(tecnico)}/>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}
