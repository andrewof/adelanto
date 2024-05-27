import React from "react";
import { Table } from "semantic-ui-react";
import { map } from "lodash";
import "./TablaServicios.scss"; 

export function TablaServicios({ servicios }) {
  return (
    <Table className="tabla-servicios">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Técnico encargado</Table.HeaderCell>
          <Table.HeaderCell>Descripción</Table.HeaderCell>
          <Table.HeaderCell>Fecha solicitud</Table.HeaderCell>
          <Table.HeaderCell>Fecha encuentro</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
          {map(servicios, (servicio, index) => (
            <Table.Row key={index}>
              <Table.Cell>{servicio.tecnico_first_name} {servicio.tecnico_last_name}</Table.Cell>
              <Table.Cell>{servicio.descripcion}</Table.Cell>
              <Table.Cell>{servicio.hora_actual}</Table.Cell>
              <Table.Cell>{servicio.hora_vis}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
    </Table>
  )
}
