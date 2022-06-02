import { lazy } from "react";
import routes from "./routes";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: routes.HOME,
    exact: true,
    component: lazy(() => import("pages/home")),
    props: {},
  },
  {
    path: routes.CREATE_TASK,
    exact: true,
    component: lazy(() => import("pages/createTask")),
    props: {},
  },
  {
    path: routes.FIND_TASK,
    exact: true,
    component: lazy(() => import("pages/findTask")),
    props: {},
  },
  {
    path: routes.PERFORMERS,
    exact: true,
    component: lazy(() => import("pages/performers")),
    props: {},
  },
  {
    path: routes.MY_ORDERS,
    exact: true,
    component: lazy(() => import("pages/myOrders")),
    props: {},
  },
];
