import React from "react";

import Content from "./Content";
import Aside from "./Aside";

export default function Layout() {
  return (
    <div className="main-container">
      <Aside />
      <div className="main-container__item">
        <Content />
      </div>
    </div>
  );
}
