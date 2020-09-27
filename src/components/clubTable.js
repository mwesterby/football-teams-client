import React from 'react';
import apiRequests from '../utils/apiRequests';

class ClubTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        club: {
          id: props.id
        }
      }
    }

    async componentDidMount() {
      let club = await apiRequests.getClub(this.state.club.id);
      this.setState({
        club,
      });
    }
  
    renderTableData() {
      const {id, name, country, eliminated} = this.state.club;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{country}</td>
          <td><input type="checkbox" id={id} name={name} defaultChecked={eliminated} value="eliminated"/></td>
        </tr>
      );
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