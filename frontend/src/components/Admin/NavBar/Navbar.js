import { Button, Menu, Image } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import  image  from "../../../media/logo192.png";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";


export function Navbar() {
  const { auth, logout } = useAuth();
  const { pathname } = useLocation();

  const showUser = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  }

  return (
    <Menu fixed="top" className="navbar-menu">
      <Menu.Item as={Link} to={'/admin/lista-clientes'} active={pathname === '/admin'}
        className="navbar-menu-logo" 
      >
        <Image src={image}/>
      </Menu.Item>

      <Menu.Menu position="center">
        <Menu.Item as={Link} to={'/admin/lista-clientes'} active={pathname === '/admin/lista-clientes'}
          >Clientes</Menu.Item>
        <Menu.Item as={Link} to={'/admin/lista-tecnicos'} active={pathname === '/admin/lista-tecnicos'}
        >Técnicos</Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Menu.Item>{ showUser() }</Menu.Item>
        <Menu.Item>
          <Button content="Salir" onClick={logout}/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
