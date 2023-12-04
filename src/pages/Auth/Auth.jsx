import React from "react";
import { Navigate } from "react-router-dom";

import { useTitle } from "../../utils/hooks";
import links from "../../utils/links";
import Form from "./componetns/Form";

export default function Auth() {
  useTitle("e-commerce | Login");
  const token = localStorage.getItem("token");
  if (token) return <Navigate to={links.dashboard} />;
  return (
    <section className="centred-section">
      <div className="auth-form-container">
        <span className="auth-form-title">login</span>
        <Form />
      </div>
    </section>
  );
}
