import React from "react";
import { Navigate } from "react-router-dom";
import links from "../utils/links";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to={links.signin} />;
}
