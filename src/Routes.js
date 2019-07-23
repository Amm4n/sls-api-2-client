import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import NewQ from "./containers/NewQ";
import Qs from "./containers/Qs";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Settings from "./containers/Settings";




export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
	<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
	<AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
	<AuthenticatedRoute path="/q/new" exact component={NewQ} props={childProps} />
	<AuthenticatedRoute path="/q/:id" exact component={Qs} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
