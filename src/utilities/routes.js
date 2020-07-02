import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/preauth/login';
import Register from '../components/preauth/register'
import Dashboard from '../components/content/dashboard';
import {ProtectedRoute} from './protectedroute';
import {PreAuthProtectedRoute} from './preauth-protectedroute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PreAuthProtectedRoute path='/' exact component={Login} />
        <Route path="/register" component={Register} />
        <PreAuthProtectedRoute path="/login" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
