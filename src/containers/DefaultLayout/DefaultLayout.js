import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import {Roles} from "../../actions";
import {message} from "antd";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permissionPagesList: [],
      userRole: "",
    }
  }

  componentDidMount() {
    this.intialMethod();
  }

  intialMethod = async () =>{
    await this.fetchUser();
    this.fetchRole();
  };

  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"/></div>;

  signOut(e) {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    this.props.history.push('/login')
  }

  fetchUser = async () => {
    let id = JSON.parse(localStorage.getItem("_id") || '{}');
    this.setState({
          userRole: id.role || ""
        });
  };

  fetchRole = async () => {
    const res = await Roles(this.state.userRole);
    if (res && res.data) {
      this.setState({
        permissionPagesList: res.data.permission || []
      });
    } else {
      message.error("Something Wrong");
      return []
    }
  };

  getRoute = () => {
    return routes.map(route => {
      if (this.state.permissionPagesList.includes(route.name))
        return route;
      else return []
    }).filter(v => !Array.isArray(v))
  };

  geNov = () => {
    const updated =  navigation.items.map(route => {
      if (this.state.permissionPagesList.includes(route.name))
        return route;
      else return []
    }).filter(v => !Array.isArray(v));
    return {items: updated}
  };

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)} {...this.props}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={this.geNov()} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} {...this.props}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {this.getRoute().map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                 </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
