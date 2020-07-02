import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/authservice';

export const PreAuthProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
            window.alert("You are already authorized")
          return (
            <Redirect
              to={{
                pathname: '/dashboard',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
