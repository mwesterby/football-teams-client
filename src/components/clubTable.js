import React from 'react';
import apiRequests from '../utils/apiRequests'

class ClubTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clubs: []
      }
    }
  
    async componentDidMount() {
      const clubs = await apiRequests.getClubs();
      this.setState({
        clubs: clubs
      });
    }
  
    renderTableData() {
      return this.state.clubs.map((club, index) => {
        const {id, name, country} = club;
        const eliminated = club.eliminated ? "True" : "False";
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
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

export default ClubTable