import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Landing, User, Login, SignUp, TrazPraMim, NotFound } from '../pages';

export const Routes = () => (
    <Switch>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/user" component={User} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/trazPraMim" component={TrazPraMim} />
      <Route component={NotFound} />
    </Switch>
);
