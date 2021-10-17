import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

const privateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props, location) =>
        Auth.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default privateRoute;
