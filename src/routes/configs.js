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
    path: routes.UNIQUE_PERFORMER,
    exact: true,
    component: lazy(() => import("pages/uniquePerformer")),
    props: {},
  },
  {
    path: routes.MY_ORDERS,
    exact: true,
    component: lazy(() => import("pages/myOrders")),
    props: {},
  },
  {
    path: routes.CONTACTS,
    exact: true,
    component: lazy(() => import("pages/contacts")),
    props: {},
  },
  {
    path: routes.SUPPORT,
    exact: true,
    component: lazy(() => import("pages/support")),
    props: {},
  },
  {
    path: routes.POPULAR_QUESTIONS,
    exact: true,
    component: lazy(() => import("pages/popularQuestions")),
    props: {},
  },
  {
    path: routes.SELECTED_TASK,
    exact: true,
    component: lazy(() => import("pages/selectedTask")),
    props: {},
  },
  {
    path: routes.MY_PROFILE,
    exact: true,
    component: lazy(() => import("pages/myProfile")),
    props: {},
  },
];
