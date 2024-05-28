import { Button, Menu, Image } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import  image  from "../../../media/logo192.png";
import { Link, useLocation, useNavigate } from "react-router-dom";


export function Navbar() {
  const { auth, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/")
  }

  const showUser = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  }

  return (
    <Menu fixed="top" className="navbar-menu">
      <Menu.Item as={Link} to={'/tecnico'} active={pathname === '/tecnico'}
        className="navbar-menu-logo" 
      >
        <Image src={image}/>
      </Menu.Item>

      <Menu.Menu position="center">
        <Menu.Item as={Link} to={'/tecnico'} active={pathname === '/tecnico'}
          >SERVICIOS</Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Menu.Item>{ showUser() }</Menu.Item>
        <Menu.Item>
          <Button content="Salir" onClick={handleLogout}/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}