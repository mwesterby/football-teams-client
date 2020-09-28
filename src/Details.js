import React from 'react';
import './Details.css';
import apiRequests from './utils/apiRequests'
import { Link } from 'react-router-dom'
import { countries } from './utils/countries'

function TeamBadge(props) {
    const alt = `${props.name}'s Team Badge`;
    return <img src={`http://img.uefa.com/imgml/TP/teams/logos/70x70/${props.id}.png`} alt={alt} />
}

function Countries(props) {
  let MakeOption = function(country, current) {
      if (current === country) {
        return <option key={country} value={country} selected>{country}</option>
      }
      return <option key={country} value={country}>{country}</option>
  }
    return <select name='country' id='country' onChange={props.onChange}>{countries.map((country) => {
      return MakeOption(country, props.current)
    })}</select>
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
        this.setState({[event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value});
      }

      handleSubmit(event) {
        const editedClub = {
          id: this.state.id,
          name: this.state.name,
          country: this.state.country,
          eliminated: this.state.eliminated,
        }
        apiRequests.updateClub(this.state.id, editedClub);
        event.preventDefault();
        if (window.confirm("Are you sure you want to update these values?")) window.location = "/";
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
        console.log(this.state)
        return (
            <div id='editClubForm'>
              <form onSubmit={this.handleSubmit}>
                  <p><b>ID:</b> {this.state.id}</p>

                  <label>Name:</label>
                  <input name='name' id='name' type="text" defaultValue={this.state.name} onChange={this.handleChange}></input><br />
      
                  <label>Country:</label>
                  <Countries current={this.state.country} onChange={this.handleChange}/><br />
                                    
                  <label>Eliminated:</label>
                  <input name='eliminated' id='eliminated' type="checkbox" checked={this.state.eliminated} value={this.state.eliminated} onChange={this.handleChange}></input><br />
              
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
        <Link className='back' to='/'>Home</Link>
        <ClubDetails id={clubId} />
        <EditClubForm className='editClubForm' id={clubId}/>
    </div>
  );
}

export default Details;