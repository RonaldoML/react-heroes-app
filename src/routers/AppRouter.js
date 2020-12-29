import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginScreen} exact>
          </Route>
          <Route path="/" component={DashboardRoutes} >
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
