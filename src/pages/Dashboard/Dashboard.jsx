import React from "react";
import { useTitle } from "../../utils/hooks";
import { useSelector } from "react-redux";

export default function Dashboard({ title }) {
  useTitle(title);
  const user = useSelector(({ common }) => common.user);

  return <div className="dashboard">Dashboard: {user?.name} </div>;
}
