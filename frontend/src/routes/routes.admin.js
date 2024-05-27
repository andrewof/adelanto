import { AdminLayout } from "../layouts";
import { Clientes, Tecnicos, ServiciosAdmin } from "../pages/Admin";

const routesAdmin = [
  {
    path: '/admin',
    layout: AdminLayout,
    component: Clientes,
  },
  {
    path: 'admin/lista-tecnicos',
    layout: AdminLayout,
    component: Tecnicos,
  },
  {
    path: 'admin/lista-servicios',
    layout: AdminLayout,
    component: ServiciosAdmin,
  }
]

export default routesAdmin;