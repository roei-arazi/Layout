import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Home } from './pages/Home';


function App() {
  return (
    <Router>
        <Route path="/" component={ Home } />
    </Router>
  );
}

export default App;
