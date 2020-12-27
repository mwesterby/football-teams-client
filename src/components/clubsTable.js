import React from 'react';
import { getClubs } from '../utils/apiRequests';
import { Link } from 'react-router-dom';

class ClubsTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clubs: []
      }
    }
  
    sortClubs(clubs) {
        clubs.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
              if(nameA < nameB) {
                  return -1;
              }
              if(nameA > nameB) {
                  return 1;
              }
              return 0;
          });
        return clubs;
    }

    async componentDidMount() {
      let clubs = await getClubs();
      this.setState({
        clubs: this.sortClubs(clubs)
      });
    }
  
    renderTableData() {
      return this.state.clubs.map((club, index) => {
        const {id, name, country} = club;
        const eliminated = club.eliminated ? "True" : "False";
        const detailsURL = `/details/${id}`
        return (
          <tr key={id}>
            <td>{id}</td>
            <td><Link to={detailsURL}>{name}</Link></td>
            <td>{country}</td>
            <td>{eliminated}</td>
          </tr>
        );
      })
    }

    renderTableHeader() {
        return (
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Eliminated</th>
        </tr>
        );
    }
  
    render() {
      return (
        <table id="clubs">
          {this.renderTableHeader()}
          {this.renderTableData()}
        </table>
      );
    } 
}

export default ClubsTable