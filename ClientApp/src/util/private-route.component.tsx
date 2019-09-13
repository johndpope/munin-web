import React, { ComponentClass } from "react";
import { Route, Redirect, RouteProps } from "react-router";

function PrivateRoute(props: PrivateRouteProps) {
    const { isLoggedIn, redirectTo, component , ...rest} = props;
        return (
      <Route
        {...rest}
        render={props => (
            isLoggedIn()
            ? React.createElement(component as ComponentClass<any, any>, props)
            : <Redirect to={{ pathname: "/login", state: { from: props.location }}}/>
          )
        }
      />
    );
  }

  interface PrivateRouteProps extends RouteProps {
    redirectTo?: string;
    isLoggedIn: () => boolean;
  }

  export default PrivateRoute;