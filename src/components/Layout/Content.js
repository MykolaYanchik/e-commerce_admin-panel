import React, { memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";

const Content = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((route, i) => {
          return (
            route.component && (
              <Route
                key={i}
                path={route.path}
                element={<route.component title={route.title} />}
              />
            )
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default memo(Content);
