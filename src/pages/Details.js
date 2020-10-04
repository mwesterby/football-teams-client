import React from 'react';
import '../styles/Details.css';
import { Link } from 'react-router-dom'
import EditClubForm from '../components/editClubForm'
import ClubDetails from '../components/clubDetails'

function Details(props) {
  const clubId = parseInt(props.match.params.id, 10);
  return (
    <div className="Detials">
        <Link className='back' to='/'>Home</Link>
        <ClubDetails id={clubId} />
        <EditClubForm className='editClubForm' id={clubId}/>
    </div>
  );
}

export default Details;