import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.scss';

const  MemoryCardCollectionComponent = lazy(() => import('./memory-card/memory-card-collection.component'));
const MemoryCardCollectionsOverview = lazy(() => import('./memory-card/memory-card-collections-overview.component'));
const ClassroomComponent = lazy(() => import('./memory-card/classroom.component'));
const EditMemoryCardCollectionComppnent = lazy(() => import('./pages/edit-memory-card-collection.component'));

const App = () => (
  <div className="app">
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
  </div>
);

export default App;
