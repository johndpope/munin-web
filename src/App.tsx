import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.scss';

const MemoryCardsOverview = lazy(() => import('./memory-card/memory-cards-overview.component'));

const App = () => (
  <div className="app">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MemoryCardsOverview}/>
        </Switch>
      </Suspense>
    </Router>
  </div>  
);

export default App;
