import React from 'react';
import apiRequests from '../utils/apiRequests';

function TeamBadge(props) {
    const teamBadgeURL = `http://img.uefa.com/imgml/TP/teams/logos/70x70/${props.id}.png`
    const alt = `${props.name}'s Team Badge`;
    return <img src={teamBadgeURL} alt={alt} />
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
      const uefaLink = `https://www.uefa.com/teamsandplayers/teams/club=${id}/profile/index.html`
      return (
          <div>
              <h1>{name}</h1>
              <div>
                <TeamBadge name={name} id={id} />
              </div>
              <div className='uefaLink'>
                <a href={uefaLink}>{name}'s UEFA Club Profile</a>
              </div>
              <hr />
          </div>
      );
    }
  }

  export default ClubDetails