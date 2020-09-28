import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Listings from './Listings';
import Details from './Details';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Listings} />
        <Route path='/details/:id' component={Details} />
      </Switch>
    </main>
  );
}

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
