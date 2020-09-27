import React from 'react';
// import './App.css';
import apiRequests from './utils/apiRequests'
import ClubTable from './components/clubTable'
import { Link } from 'react-router-dom'

function TeamBadge(props) {
    const alt = `${props.name}'s Team Badge`;
    return <img src={`http://img.uefa.com/imgml/TP/teams/logos/70x70/${props.id}.png`} alt={alt} />
}

class ClubDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club: {
                id: props.id,
            }
        }
    }

    async componentDidMount() {
        const club = await apiRequests.getClub(this.state.club.id);
        this.setState({
          club,
        });
      }

    render() {
        const {name, id} = this.state.club;
        return (
            <div>
                <h1>{name}</h1>
                <TeamBadge name={name} id={id} />
                <a href={`https://www.uefa.com/teamsandplayers/teams/club=${id}/profile/index.html`}>{name}'s UEFA Club Profile</a>
            </div>
        );
    }
}

function Details(props) {
  const clubId = parseInt(props.match.params.id, 10);
  return (
    <div className="Detials">
        <Link to='/'>Home</Link>   
        <ClubDetails id={clubId} />
        <ClubTable id={clubId} />
    </div>
  );
}

export default Details;