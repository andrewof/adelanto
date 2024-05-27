import { ClientLayout, LoginLayoutGeneral, RegisterLayoutGeneral } from "../layouts";
import { Home, LoginHome, TecnicosDisponibles, UpdateDatos, Servicios, RegisterHome } from "../pages/Client";

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
  },
  {
    path: '/mis-datos',
    layout: ClientLayout,
    component: UpdateDatos,
  },
  {
    path: '/mis-servicios',
    layout: ClientLayout,
    component: Servicios,
  },
  {
    path: '/register',
    layout: RegisterLayoutGeneral,
    component: RegisterHome,
  }
]

export default routesClient;