import React from "react";
import { Navigate } from "react-router-dom";
import links from "../utils/links";

export default function PrivateRoute({ children }) {
  const auth = localStorage.getItem("auth");

  return auth ? children : <Navigate to={links.signin} />;
}
