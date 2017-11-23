import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../auth/Login';
import Register from '../auth/Register';
import PhotosHome from '../photos/PhotosHome';
import PhotosIndex from '../photos/PhotosIndex';
import PhotosShow from '../photos/PhotosShow';
import PhotosNew from '../photos/PhotosNew';
import PhotosEdit from '../photos/PhotosEdit';

const Routes = () => {
  return(
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/home" component={PhotosHome}></Route>
      <Route exact path="/gallery" component={PhotosIndex}></Route>
      <Route exact path = "/photos/:id" component = { PhotosShow } />
      <ProtectedRoute path="/photos/:id/edit" component={PhotosEdit} />
      <ProtectedRoute path="/new" component={PhotosNew} />
    </Switch>
  );
};

export default Routes;
