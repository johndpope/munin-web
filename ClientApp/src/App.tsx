import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.scss';
import PrivateRoute from './util/private-route.component';
import { ApplicationPaths } from './auth/ApiAuthorizationConstants';
import ApiAuthorizationRoutes from './auth/ApiAuthorizationRoutes';
import AuthorizeRoute from './auth/AuthorizeRoute';

const  Login = lazy(() => import('./pages/login.page'));
const  MemoryCardCollectionComponent = lazy(() => import('./pages/memory-card-set.component'));
const MemoryCardCollectionsOverview = lazy(() => import('./pages/memory-card-sets-overview.component'));
const ClassroomComponent = lazy(() => import('./pages/classroom.component'));
const EditMemoryCardCollectionComppnent = lazy(() => import('./pages/edit-memory-card-collection.component'));

const IsLoggedIn = () => {
  const token = localStorage.getItem('token');
  return token !== null;
}

const App = () => (
  <div className="app">
    <main>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <AuthorizeRoute exact path="/" component={MemoryCardCollectionsOverview} isLoggedIn={IsLoggedIn}/>
            <Route path="/login" component={Login} isLoggedIn={IsLoggedIn}/>
            <AuthorizeRoute exact path="/memory-card-collection/:id" component={MemoryCardCollectionComponent} isLoggedIn={IsLoggedIn}/>
            <AuthorizeRoute exact path="/memory-card-collection/:collectionId/classroom" component={ClassroomComponent} isLoggedIn={IsLoggedIn}/>
            <AuthorizeRoute exact path="/memory-card-collection/:collectionId/edit" component={EditMemoryCardCollectionComppnent} isLoggedIn={IsLoggedIn}/>
            <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  </div>
);

export default App;
