import React from "react";
import links from "../../utils/links";

const Dasboard = React.lazy(() => import("../../pages/Dashboard/Dashboard"));

const routes = [
  {
    path: links.dashboard,
    component: Dasboard,
    title: "e-commerce | Dashboard",
  },
];

export default routes;
