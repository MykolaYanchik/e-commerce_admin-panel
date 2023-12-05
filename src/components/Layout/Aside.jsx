import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import links from "../../utils/links";

export default function Aside() {
  const user = useSelector(({ common }) => common.user);
  
  return (
    <nav className="sidebar">
      <ul>
        <NavLink to={links.dashboard}>
            Dasboard
        </NavLink>
        <li>link 1</li>
        <li>link 2</li>
        <li>link 3</li>
        <li>link 4</li>
        <li>link 5</li>
      </ul>
      <NavLink to={links.users} className="sidebar-user">
        <div className="sidebar-user__circle"></div>
        <span className="sidebar-user__name">{user?.name}</span>
      </NavLink>
    </nav>
  );
}
