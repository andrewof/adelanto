import { Button, Menu } from "semantic-ui-react";
// import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from "../../../hooks";
import "./NavBar.scss";


export function Navbar() {
  const { auth, logout } = useAuth();

  const showUser = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  }

  return (
    <Menu fixed="top" className="navbar-menu">
      <Menu.Item className="navbar-menu-logo">
        Logo
      </Menu.Item>

      <Menu.Menu position="center">
        <Menu.Item>Clientes</Menu.Item>
        <Menu.Item>Técnicos</Menu.Item>
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
