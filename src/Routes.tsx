import React, { FunctionComponent } from 'react';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const loadModule = (module: string) =>
  Loadable({
    loader: () => import(module),
    loading: Loading,
  });

export default function() {
  const NotFound = Loadable({
    loader: () => import('./pages/NotFound'),
    loading: Loading,
  });
  const Home = Loadable({
    loader: () => import('./pages/Home'),
    loading: Loading,
  });
  const Login = Loadable({
    loader: () => import('./pages/Login'),
    loading: Loading,
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
