import { ClientLayout, LoginLayoutGeneral } from "../layouts";
import { Home, LoginHome } from "../pages/Client";

const routesClient = [
  {
    path: '/',
    layout: ClientLayout,
    component: Home,
  },
  {
    path: '/login',
    layout: LoginLayoutGeneral,
    component: LoginHome,
  }
]

export default routesClient;