import React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import image from "../../../media/logo192.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./Navbar.scss";


export function Navbar() {
  const { auth, logout } = useAuth();
  const { pathname } = useLocation();

  // console.log(auth)
 
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
        {auth ? (
          <Menu.Item>
            <Button content="Salir" 
              className="navbar-button"
              onClick={logout}
            />
          </Menu.Item>
        ):(
          <Button content="Ingresar" 
            className="navbar-button"
            as={Link} to={"/login"}/>         
        )}

      </Menu.Menu>
    </Menu>
  )
}
