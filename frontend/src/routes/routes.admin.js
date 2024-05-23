import { AdminLayout } from "../layouts";
import { HomeAdmin, Clientes, Tecnicos } from "../pages/Admin";

const routesAdmin = [
  {
    path: '/admin/lista-clientes',
    layout: AdminLayout,
    component: Clientes,
  },
  {
    path: 'admin/lista-tecnicos',
    layout: AdminLayout,
    component: Tecnicos,
  },
]

export default routesAdmin;