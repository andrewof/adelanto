import React from "react";
import { Table } from "semantic-ui-react";
import { map } from "lodash";
import "./TablaClientes.scss";

export function TablaClientes({ clientes }) {
  return (
    <Table className="tabla-clientes-container">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Cédula</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Apellido</Table.HeaderCell>
          <Table.HeaderCell>Dirección</Table.HeaderCell>
          <Table.HeaderCell>Código Postal</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(clientes, (cliente, index) => (
          <Table.Row key={index}>
            <Table.Cell>{cliente.cedula}</Table.Cell>
            <Table.Cell>{cliente.email}</Table.Cell>
            <Table.Cell>{cliente.first_name}</Table.Cell>
            <Table.Cell>{cliente.last_name}</Table.Cell>
            <Table.Cell>{cliente.direccion}</Table.Cell>
            <Table.Cell>{cliente.codigo_postal}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
