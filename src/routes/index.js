import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import configs from "./configs";

export default function RouteBuilder() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          {configs.map(({ component: Comp, exact, path, props }, index) => (
            <Route
              key={index}
              element={<Comp />}
              path={path}
              exact={exact}
              {...props}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}
