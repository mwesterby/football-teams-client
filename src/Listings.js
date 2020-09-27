import React from 'react';
// import './App.css';
import ClubTable from './components/clubTable'

function Title(props) {
  return <h1>{props.title}</h1>
}

function Listings() {
  return (
    <div className="Listings">
      <Title title="Listings" />
      <ClubTable />
    </div>
  );
}

export default Listings;
