import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import configs from "./configs";
import { isMobile } from "react-device-detect";

export default function RouteBuilder() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          {configs.map(
            (
              { mobile: Mobile, desktop: Desktop, exact, path, props },
              index
            ) => (
              <Route
                key={index}
                element={isMobile ? <Mobile /> : <Desktop />}
                path={path}
                exact={exact}
                {...props}
              />
            )
          )}
        </Routes>
      </Suspense>
    </div>
  );
}
