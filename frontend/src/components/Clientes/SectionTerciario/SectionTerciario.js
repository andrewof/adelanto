import React from "react";
import { Container, Grid, Header, Button, Segment, Icon } from "semantic-ui-react";

export function SectionTerciario() {
  return (
    <Container style={{ padding: '2em 0' }}>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment raised>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name='comments' size='huge' color='red' />
                </Grid.Column>
                <Grid.Column width={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Header as='h3'>Soporte técnico en vivo las 24 horas</Header>
                  <p>Soporte técnico disponible en español y con personas reales. Estamos disponibles por correo electrónico y chat en vivo para ayudarle con la configuración y resolución de problemas.</p>
                  <Button color='green'>Contactar al soporte técnico</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
        
        <Grid.Column>
          <Segment raised>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name='calendar check' size='huge' color='red' />
                </Grid.Column>
                <Grid.Column width={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Header as='h3'>Garantía de devolución de dinero a 30 días</Header>
                  <p>Nuestra VPN es fácil de usar. Y nuestra garantía también. Si no está satisfecho, le reembolsaremos su pago. Sin dificultades, sin compromiso.</p>
                  <Button color='green'>Comprar ExpressVPN</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
