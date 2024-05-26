import React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import image from "../../../media/logo192.png";
import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./Navbar.scss";


export function Navbar() {
  const { auth, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // console.log(auth)

  const handleLogout = () => {
    logout();
    navigate("/");
  }
 
  return (
    <Menu fixed="top" className="navbar-menu">
      <Menu.Item className="navbar-menu-logo">
        <Image src={image} as={Link} to={"/"}/>
      </Menu.Item>

      <Menu.Menu position="center">
        <Menu.Item as={Link} to={"/"} active={pathname === '/'}>INICIO</Menu.Item>
        <Menu.Item as={Link} to={"/tecnicos"} active={pathname === '/tecnicos'}>TÉCNICOS</Menu.Item>
        {auth ? (
          <>
            <Menu.Item as={Link} to={"/mis-servicios"} active={pathname === '/mis-servicios'}>MIS SERVICIOS</Menu.Item>
            <Menu.Item as={Link} to={"/mis-datos"} active={pathname === '/mis-datos'}>MIS DATOS</Menu.Item>
          </>
        ):(
          <span />
        )}
      </Menu.Menu>

      <Menu.Menu position="right">
        {auth ? (
          <Menu.Item>
            <Button content="Salir" 
              className="navbar-button"
              onClick={handleLogout}
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
