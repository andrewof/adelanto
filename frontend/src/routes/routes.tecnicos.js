import { TecnicoLayout } from "../layouts"
import { ServiciosAsignados } from "../pages/Tecnico";

const routesTecnicos = [
  {
    path: '/tecnico',
    layout: TecnicoLayout,
    component: ServiciosAsignados,
  }
]

export default routesTecnicos;