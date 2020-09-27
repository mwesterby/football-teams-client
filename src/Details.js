import React from 'react';
// import './App.css';
import apiRequests from './utils/apiRequests'
import { Link, Redirect } from 'react-router-dom'

function TeamBadge(props) {
    const alt = `${props.name}'s Team Badge`;
    return <img src={`http://img.uefa.com/imgml/TP/teams/logos/70x70/${props.id}.png`} alt={alt} />
}

function ClubDetails (props){
  const {name, id} = props;
  return (
      <div>
          <h1>{name}</h1>
          <TeamBadge name={name} id={id} /><br />
          <a href={`https://www.uefa.com/teamsandplayers/teams/club=${id}/profile/index.html`}>{name}'s UEFA Club Profile</a>
          <hr />
      </div>
  );
}

class EditClubForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: "",
            country: "",
            eliminated: "",
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      async handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.name);
        const editedClub = {
          id: this.state.id,
          name: this.state.name,
          country: this.state.country,
          eliminated: this.state.eliminated,
        }
        await apiRequests.updateClub(this.state.id, editedClub);
        // event.preventDefault();
      }

      async componentDidMount() {
        const club = await apiRequests.getClub(this.props.id);
        this.setState({
          id: club.id,
          name: club.name,
          country: club.country,
          eliminated: club.eliminated
        });
      }


      render() {
        const {id, name, country, eliminated} = this.state
        console.log(this.state)
        return (
            <div>
              <ClubDetails id={id} name={name} />
              <form onSubmit={this.handleSubmit}>
                  <label for='clubId'>ID:</label><br />
                  <input name='id' id='clubId' type="text" value={id} onChange={this.handleChange}></input><br />
      
                  <label for='name'>Name:</label><br />
                  <input name='name' id='name' type="text" defaultValue={name} onChange={this.handleChange}></input><br />
      
                  <label for='country'>Country:</label><br />
                  <input name='country' id='country' type="text" defaultValue={country} onChange={this.handleChange}></input><br />
                  
                  <label for='eliminated'>Eliminated:</label><br />
                  <input name='eliminated' id='eliminated' type="checkbox" defaultChecked={eliminated} onChange={this.handleChange}></input><br />
              
                  <input type="submit" value="Save"></input>        
              </form>  
            </div>
            
        )
      }
    
}

function Details(props) {
  const clubId = parseInt(props.match.params.id, 10);
  return (
    <div className="Detials">
        <Link to='/'>Home</Link>   
        <EditClubForm id={clubId}/>
    </div>
  );
}

export default Details;