import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.scss';
import MemoryCardCollectionComponent from './memory-card/memory-card-collection.component';

const MemoryCardCollectionsOverview = lazy(() => import('./memory-card/memory-card-collections-overview.component'));

const App = () => (
  <div className="app">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MemoryCardCollectionsOverview}/>
          <Route exact path="/memory-card-collection/:id" component={MemoryCardCollectionComponent}/>
        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
