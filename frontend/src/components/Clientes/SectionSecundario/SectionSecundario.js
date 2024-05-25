import React from "react";
import { Grid, Header, Icon, Button, Segment, Image } from "semantic-ui-react";
import image from "../../../media/media-home-clientes/atencion1.png";
import "./SectionSecundario.scss";

export function SectionSecundario() {
  return (
    <Segment raised className="custom-segment" style={{ padding: '2em', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1a2c38', borderRadius: '10px' }}>
            <div style={{ textAlign: 'center' }}>
              <Image src={image} className="segment-image"/>
            </div>
          </Grid.Column>
          <Grid.Column width={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2em' }}>
            <Header as='h2' className="segment-title">Atendemos tus necesidades durante cualquier hora del día.</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
