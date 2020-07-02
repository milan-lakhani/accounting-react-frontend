import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/preauth/login';
import Register from '../components/preauth/register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
    
      </Switch>
    </BrowserRouter>
  );
}
