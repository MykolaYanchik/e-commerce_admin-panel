import React from "react";
import { useTitle } from "../../utils/hooks";

export default function Dashboard({ title }) {
  useTitle(title);
  return <div>Dashboard</div>;
}
