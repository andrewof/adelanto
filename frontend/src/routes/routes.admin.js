import { AdminLayout } from "../layouts";
import { HomeAdmin, Clientes } from "../pages/Admin";

const routesAdmin = [
  {
    path: '/admin',
    layout: AdminLayout,
    component: HomeAdmin,
  },
  {
    path: '/admin/lista-clientes',
    layout: AdminLayout,
    component: Clientes,
  },
]

export default routesAdmin;