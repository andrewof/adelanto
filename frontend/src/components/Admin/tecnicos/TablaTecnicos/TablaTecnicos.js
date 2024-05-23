import React from "react";
import { Table, Button } from "semantic-ui-react";
import { map } from "lodash";
import "./TablaTecnicos.scss";

export function TablaTecnicos({ tecnicos }) {
  return (
    <Table className="tabla-tecnicos-container">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Cédula</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Apellido</Table.HeaderCell>
          <Table.HeaderCell>Profesión</Table.HeaderCell>
          <Table.HeaderCell>Experiencia</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(tecnicos, (tecnico, index) => (
          <Table.Row key={index}>
            <Table.Cell>{tecnico.cedula}</Table.Cell>
            <Table.Cell>{tecnico.email}</Table.Cell>
            <Table.Cell>{tecnico.first_name}</Table.Cell>
            <Table.Cell>{tecnico.last_name}</Table.Cell>
            <Table.Cell>{tecnico.profesion}</Table.Cell>
            <Table.Cell>{tecnico.experiencia}</Table.Cell>
            
            <Actions tecnico={tecnico}/>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

function Actions({ tecnico }) {
  return (
    <Table.Cell>
      <Button onClick={() => console.log(`Editar tecnico ${tecnico.email}`)}>Editar</Button>
      <Button onClick={() => console.log(`Eliminar tecnico ${tecnico.email}`)}>Eliminar</Button>
    </Table.Cell>
  )
}
