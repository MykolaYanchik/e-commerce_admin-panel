import React from "react";
import { Navigate } from "react-router-dom";

import { useTitle } from "../../utils/hooks";
import links from "../../utils/links";

export default function Auth() {
  useTitle("e-commerce | Login");
  const auth = localStorage.getItem("auth");
  if (auth) return <Navigate to={links.dashboard} />;
  return <div>Auth</div>;
}
