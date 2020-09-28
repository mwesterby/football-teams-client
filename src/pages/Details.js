import React from 'react';
import '../styles/Details.css';
import apiRequests from '../utils/apiRequests'
import { Link } from 'react-router-dom'
import EditClubForm from '../components/editClubForm'

function TeamBadge(props) {
    const alt = `${props.name}'s Team Badge`;
    return <img src={`http://img.uefa.com/imgml/TP/teams/logos/70x70/${props.id}.png`} alt={alt} />
}

class ClubDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id,
        name: "",
    };
  }

  async componentDidMount() {
    const club = await apiRequests.getClub(this.state.id);
    this.setState({
      id: club.id,
      name: club.name,
    });
  }


  render() {
    const {name, id} = this.state;
    return (
        <div>
            <h1>{name}</h1>
            <div>
              <TeamBadge name={name} id={id} />
            </div>
            <div className='uefaLink'>
              <a href={`https://www.uefa.com/teamsandplayers/teams/club=${id}/profile/index.html`}>{name}'s UEFA Club Profile</a>
            </div>
            <hr />
        </div>
    );
  }

}

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