import React from "react";
import { Container, Grid, Card, Icon } from "semantic-ui-react";
import image1 from "../../../media/media-home-clientes/tecnico1.png";
import image2 from "../../../media/media-home-clientes/tecnico2.png";
import image3 from "../../../media/media-home-clientes/tecnico3.png";
import "./SectionPrincipal.scss";

export function SectionPrincipal() {
  return (
    <>
      <Container textAlign="center" style={{marginTop: '50px'}}>
        <Grid columns={3} stackable className="custom-grid">
          <Grid.Column>
            <Card className="custom-card">
              <Card.Content>
                <img src={image1} alt="Descripción de la imagen" style={{ width: '290px', height: '300px',       marginBottom: '10px' }} />
                <Card.Header className="card-header">Encuentra soluciones a tus problemas</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card className="custom-card">
              <Card.Content>
                <img src={image2} alt="Imágen 2" style={{ maxWidth: '280px', height: '300px',       marginBottom: '10px' }} />
                <Card.Header className="card-header">¡Técnicos a un solo click!</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card className="custom-card">
              <Card.Content>
                <img src={image3} alt="Imágen 3" style={{ maxWidth: '290px', height: '300px',       marginBottom: '10px' }} />
                <Card.Header className="card-header">Técnicos de calidad</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}
