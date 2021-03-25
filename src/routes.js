import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Accounts = React.lazy(() => import('./views/Accounts'));
const GrabData = React.lazy(() => import('./views/GrabData'));
const changePassword = React.lazy(() => import('./views/ChangePassword'));
const signUp = React.lazy(() => import('./views/SignUp'));
const setting = React.lazy(() => import('./views/Setting'));

const routes = [
  {path: '/', name: 'Home', component: DefaultLayout, exact: true},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard},
  {path: '/accounts', name: 'Accounts', component: Accounts},
  {path: '/grab-data', name: 'LiveAppChecker', component: GrabData},
  {path: '/changePassword', name: 'ChangePassword', component: changePassword},
  {path: '/users', name: 'signUp', component: signUp},
  {path: '/setting', name: 'setting', component: setting},
];

export default routes;
