import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.scss';

const  MemoryCardCollectionComponent = lazy(() => import('./pages/memory-card-set.component'));
const MemoryCardCollectionsOverview = lazy(() => import('./pages/memory-card-sets-overview.component'));
const ClassroomComponent = lazy(() => import('./pages/classroom.component'));
const EditMemoryCardCollectionComppnent = lazy(() => import('./pages/edit-memory-card-collection.component'));

const App = () => (
  <div className="app">
    <main>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={MemoryCardCollectionsOverview}/>
            <Route exact path="/memory-card-collection/:id" component={MemoryCardCollectionComponent}/>
            <Route exact path="/memory-card-collection/:collectionId/classroom" component={ClassroomComponent}/>
            <Route exact path="/memory-card-collection/:collectionId/edit" component={EditMemoryCardCollectionComppnent}/>
          </Switch>
        </Suspense>
      </Router>
    </main>
  </div>
);

export default App;
