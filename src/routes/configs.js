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
];
