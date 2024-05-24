import React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import image from "../../../media/logo192.png";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { pathname } = useLocation();
 
  return (
    <Menu fixed="top" className="navbar-menu">
      <Menu.Item className="navbar-menu-logo">
        <Image src={image} as={Link} to={"/"}/>
      </Menu.Item>

      <Menu.Menu position="center">
        <Menu.Item as={Link} to={"/"} active={pathname === '/'}>INICIO</Menu.Item>
        <Menu.Item as={Link} to={"/tecnicos"} active={pathname === '/tecnicos'}>TÉCNICOS</Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Button content="Ingresar" className="navbar-button"/>
      </Menu.Menu>
    </Menu>
  )
}
