import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import MinimalLayout from "../layout/MinimalLayout";
import NavMotion from "../layout/NavMotion";

const AuthSignup = lazy(() => import("../views/pages/authentication/signup"));

const SignupRoutes = () => {
  const location = useLocation();

  return (
    <Route path={["/signup"]}>
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <NavMotion>
            <Route path="/signup" component={AuthSignup} />
          </NavMotion>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default SignupRoutes;
