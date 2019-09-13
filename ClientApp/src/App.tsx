import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.scss';
import PrivateRoute from './util/private-route.component';

const  Login = lazy(() => import('./pages/login.component'));
const  MemoryCardCollectionComponent = lazy(() => import('./pages/memory-card-set.component'));
const MemoryCardCollectionsOverview = lazy(() => import('./pages/memory-card-sets-overview.component'));
const ClassroomComponent = lazy(() => import('./pages/classroom.component'));
const EditMemoryCardCollectionComppnent = lazy(() => import('./pages/edit-memory-card-collection.component'));

const IsLoggedIn = () => {
  console.log('Yea, you are logged in...');
  return false;
}

const App = () => (
  <div className="app">
    <main>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute exact path="/" component={MemoryCardCollectionsOverview} isLoggedIn={IsLoggedIn}/>
            <Route path="/login" component={Login} isLoggedIn={IsLoggedIn}/>
            <PrivateRoute exact path="/memory-card-collection/:id" component={MemoryCardCollectionComponent} isLoggedIn={IsLoggedIn}/>
            <PrivateRoute exact path="/memory-card-collection/:collectionId/classroom" component={ClassroomComponent} isLoggedIn={IsLoggedIn}/>
            <PrivateRoute exact path="/memory-card-collection/:collectionId/edit" component={EditMemoryCardCollectionComppnent} isLoggedIn={IsLoggedIn}/>
          </Switch>
        </Suspense>
      </Router>
    </main>
  </div>
);

export default App;
