import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'antd/dist/antd.css';
import "react-toastify/dist/ReactToastify.css"
import 'react-tagsinput/react-tagsinput.css'
import "react-select/dist/react-select.min.css"
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"/></div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

const PrivateRoute = Loadable({
  loader: () => import('./PrivateRoute'),
  loading
});

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading
});

const Forget = Loadable({
  loader: () => import('./views/ForgetPassword'),
  loading
});

const NewPassword = Loadable({
  loader: () => import('./views/NewPassword'),
  loading
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  exact path="/login" name="Login" component={Login} />
          <Route exact path="/forget-password" component={Forget}/>
          <Route exact path="/newPassword/:id" component={NewPassword}/>
          <PrivateRoute  path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
