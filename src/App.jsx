import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './cmps/Footer';
import { Header } from './cmps/Header';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
