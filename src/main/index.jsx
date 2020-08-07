import React from 'react';
import Login from './scenes/auth/scenes/Login';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Register from './scenes/auth/scenes/Register';
import Index from './scenes/application';
import ProtectedRoute from './components/ProtectedRoutes';
import Users from './scenes/application/scenes/admin/scenes/users';

export default function index() {
  return (
      <React.Fragment>
        <Router> 
          <Switch>
        
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
             
            <ProtectedRoute path="(/*)" component={Index} />
           
            <Route path="/" exact component={Login}/>
          </Switch>
        </Router>
    </React.Fragment>
  )
}


