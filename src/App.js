import React from 'react';
import './App.css';
import ClubTable from './components/clubTable'

function Title(props) {
  return <h1>{props.title}</h1>
}

function App() {
  return (
    <div className="App">
      <Title title="Listings" />
      <ClubTable />
    </div>
  );
}

export default App;
