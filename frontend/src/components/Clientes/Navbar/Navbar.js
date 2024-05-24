import React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import image from "../../../media/logo192.png";
import "./Navbar.scss";

export function Navbar() {
  return (
    <Menu className="navbar-menu">
      <Menu.Item className="navbar-menu-logo">
        <Image src={image}/>
      </Menu.Item>

      <Menu.Menu position="center">
        <Menu.Item>Inicio</Menu.Item>
        <Menu.Item>Técnicos</Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Button content="Ingresar"/>
      </Menu.Menu>
    </Menu>
  )
}
