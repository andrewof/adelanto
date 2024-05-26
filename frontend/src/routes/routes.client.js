import { ClientLayout, LoginLayoutGeneral } from "../layouts";
import { Home, LoginHome, TecnicosDisponibles } from "../pages/Client";

const routesClient = [
  {
    path: '/',
    layout: ClientLayout,
    component: Home,
  },
  {
    path: '/tecnicos',
    layout: ClientLayout,
    component: TecnicosDisponibles,
  },
  {
    path: '/login',
    layout: LoginLayoutGeneral,
    component: LoginHome,
  }
]

export default routesClient;