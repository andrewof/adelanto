import React from 'react'
import { Table } from "semantic-ui-react";
import { map } from "lodash";
import "./TablaServiciosAsignados.scss";

export function TablaServiciosAsignados({ servicios }) {

  console.log(servicios)

  return (
    <Table className="tabla-servicios-asignados">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Cliente</Table.HeaderCell>
          <Table.HeaderCell>direccion</Table.HeaderCell>
          <Table.HeaderCell>fecha_solicitud</Table.HeaderCell>
          <Table.HeaderCell>fecha_visita</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(servicios, (servicio, index) =>  (
          
          <Table.Row key={index}>
            <Table.Cell>{servicio.cliente_first_name} {servicio.cliente_last_name}</Table.Cell>
            <Table.Cell>{servicio.descripcion}</Table.Cell>
            <Table.Cell>{servicio.hora_actual}</Table.Cell>
            <Table.Cell>{servicio.hora_vis}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
