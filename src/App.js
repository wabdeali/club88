import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Homepage from './Components/Homepage'
import Products from './Components/Products'
import { Auth } from './Components/Authentication/index'
import AuthProvider from './Components/Auth.jsx';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/auth" component={Auth} exact />
          <PrivateRoute path="/products" component={Products} exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
