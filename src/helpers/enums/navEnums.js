import routes from "routes/routes";

export const navLinks = [
    {label: "Создать задание", path: routes.CREATE_TASK},
    {label: "Найти задание", path: routes.FIND_TASK},
];

export const authNavLinks = [
    {label: "Создать задание", path: routes.CREATE_TASK},
    {label: "Найти задание", path: routes.FIND_TASK},
    {label: "Исполнители", path: routes.PERFORMERS},
    {label: "Мои заказы", path: routes.MY_ORDERS},
]