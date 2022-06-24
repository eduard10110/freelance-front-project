import { lazy } from "react";
import routes from "./routes";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: routes.HOME,
    exact: true,
    desktop: lazy(() => import("pages/home/desktop")),
    mobile: lazy(() => import("pages/home/mobile")),
    props: {},
  },
  {
    path: routes.CREATE_TASK,
    exact: true,
    desktop: lazy(() => import("pages/createTask/desktop")),
    mobile: lazy(() => import("pages/createTask/mobile")),
    props: {},
  },
  {
    path: routes.CREATE_TASK_SUCCESS,
    exact: true,
    desktop: lazy(() => import("pages/createTaskSuccess/desktop")),
    mobile: lazy(() => import("pages/createTaskSuccess/mobile")),
    props: {},
  },
  {
    path: routes.FIND_TASK,
    exact: true,
    desktop: lazy(() => import("pages/findTask/desktop")),
    mobile: lazy(() => import("pages/findTask/mobile")),
    props: {},
  },
  {
    path: routes.PERFORMERS,
    exact: true,
    desktop: lazy(() => import("pages/performers/desktop")),
    mobile: lazy(() => import("pages/performers/mobile")),
    props: {},
  },
  {
    path: routes.UNIQUE_PERFORMER,
    exact: true,
    desktop: lazy(() => import("pages/uniquePerformer/desktop")),
    mobile: lazy(() => import("pages/uniquePerformer/mobile")),
    props: {},
  },
  {
    path: routes.MY_ORDERS,
    exact: true,
    desktop: lazy(() => import("pages/myOrders/desktop")),
    mobile: lazy(() => import("pages/myOrders/mobile")),
    props: {},
  },
  {
    path: routes.CONTACTS,
    exact: true,
    desktop: lazy(() => import("pages/contacts/desktop")),
    mobile: lazy(() => import("pages/contacts/mobile")),
    props: {},
  },
  {
    path: routes.SUPPORT,
    exact: true,
    desktop: lazy(() => import("pages/support/desktop")),
    mobile: lazy(() => import("pages/support/mobile")),
    props: {},
  },
  {
    path: routes.POPULAR_QUESTIONS,
    exact: true,
    desktop: lazy(() => import("pages/popularQuestions/desktop")),
    mobile: lazy(() => import("pages/popularQuestions/mobile")),
    props: {},
  },
  {
    path: routes.SELECTED_TASK,
    exact: true,
    desktop: lazy(() => import("pages/selectedTask/desktop")),
    mobile: lazy(() => import("pages/selectedTask/mobile")),
    props: {},
  },
  {
    path: routes.MY_PROFILE,
    exact: true,
    desktop: lazy(() => import("pages/myProfile/desktop")),
    mobile: lazy(() => import("pages/myProfile/mobile")),
    props: {},
  },
];
