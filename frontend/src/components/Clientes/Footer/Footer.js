import React from "react";
import { Container, Grid, List } from "semantic-ui-react";
import "./Footer.scss"

export function Footer() {
  return (
    <div style={{ backgroundColor: '#0f212e', color: '#fff', padding: '2em 0', width: '100%'}} className="footer">
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                  Política de privacidad
                </List.Item>
                <List.Item as='a' href='#'>
                  Términos de servicio
                </List.Item>
                <List.Item as='a' href='#'>
                  Cambiar sus preferencias
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <p>© 2024 TecnoServicios. Todos los derechos reservados</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center'>
              <List horizontal inverted link size='small'>
                <List.Item as='a' href='#'>
                  <i className='linkedin icon'></i>
                </List.Item>
                <List.Item as='a' href='#'>
                  <i className='youtube icon'></i>
                </List.Item>
                <List.Item as='a' href='#'>
                  <i className='twitter icon'></i>
                </List.Item>
                <List.Item as='a' href='#'>
                  <i className='facebook icon'></i>
                </List.Item>
                <List.Item as='a' href='#'>
                  <i className='instagram icon'></i>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}
