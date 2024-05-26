import React from "react";
import { Card, Image } from "semantic-ui-react";
import { map } from "lodash";
import "./CardTecnicos.scss";

export function CardTecnicos({ tecnicos }) {
  return (
    <Card.Group>
      {map(tecnicos, (tecnico, index) => (
        <Card key={index}>
          <Image src={tecnico.image}/>
          <Card.Content>
            <Card.Header>{tecnico.email}</Card.Header>
            <Card.Description>{tecnico.profesion}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}
