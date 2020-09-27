import React from 'react';
// import './App.css';
import ClubsTable from './components/clubsTable'

function Title(props) {
  return <h1>{props.title}</h1>
}

function Listings() {
  return (
    <div className="Listings">
      <Title title="Listings" />
      <ClubsTable />
    </div>
  );
}

export default Listings;
