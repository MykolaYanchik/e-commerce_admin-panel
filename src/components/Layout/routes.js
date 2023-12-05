import React from "react";
import links from "../../utils/links";

const Dasboard = React.lazy(() => import("../../pages/Dashboard/Dashboard"));
const Users = React.lazy(() => import("../../pages/Users/Users"));

const routes = [
  {
    path: links.dashboard,
    component: Dasboard,
    title: "e-commerce | Dashboard",
  },
  {
    path: links.users,
    component: Users,
    title: "e-commerce | Users",
  },
];

export default routes;
