import React from "react";
import { useTitle } from "../../utils/hooks";

export default function User({ title }) {
  useTitle(title);
  return <div>User</div>;
}
