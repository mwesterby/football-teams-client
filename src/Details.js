import React from 'react';
// import './App.css';

function TeamBadge(props) {
    const alt = `${props.name} team badge`;
    return <img src={`http://img.uefa.com/imgml/TP/teams/logos/70x70/${props.id}.png`} alt={alt} />
}

function Details(props) {
  const clubID = parseInt(props.match.params.id, 10);
  return (
    <div className="Detials">
        <h1>Place Holder</h1>
        <TeamBadge name='liverpool' id='7889' />
        <h1>{clubID}</h1>
    </div>
  );
}

export default Details;