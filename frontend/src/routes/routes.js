import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import routerTecnico from "./routes.tecnicos"
import { BasicLayout } from "../layouts";
import { Error404 } from "../pages/Error404";


const routes = [...routerAdmin, ...routerClient, ...routerTecnico, {
  path: '/*',
  layout: BasicLayout,
  component: Error404,
}];

export default routes;
