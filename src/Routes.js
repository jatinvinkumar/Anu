import React from 'react';
import { Switch, Redirect, Link, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  PropertySearch as PropertySearchView,
  Property as PropertyView,
  Dash as DashView,
  Home as HomeView
} from './views';
import {connect} from 'react-redux';

const Routes = props => {
  const {auth} = props;
  console.log("routing: ", auth)

  const DashboardPage = ({ uid }) => {
    return (
      <div/>
    );
  };

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      {auth.uid ?  <Route
      //component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard" 
        render={(props) => <MainLayout><DashboardView {...props} isAuthed={true} /></MainLayout>}
      />: <Redirect exact from="/dashboard"to={"/sign-in"}></Redirect>}
      {auth.uid ?  <Route
      //component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/applications/:id" 
        render={(props) => <MainLayout><DashboardView {...props} isAuthed={true} /></MainLayout>}
      />: <Redirect exact from="/dashboard/applications/:id"to={"/sign-in"}></Redirect>}
       <RouteWithLayout
        component={PropertySearchView}
        exact
        layout={MainLayout}
        path="/propertySearch"
      />
      <RouteWithLayout  
        component={PropertyView}
  
        layout={MainLayout}
        path="/property/:id"
      />

      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={DashView}
        layout={MainLayout}
        path="/dash"
      />
       <RouteWithLayout
        component={HomeView}
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

const mapStateToProps = (state, ownProps) => {
  //console.log('navBar: ', state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Routes);
