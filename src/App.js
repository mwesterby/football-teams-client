import React from 'react';
import './App.css';
import apiRequests from './utils/apiRequests'

function Title(props) {
  return <h1>{props.title}</h1>
}

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

  render() {
    return (
      <table id="clubs">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Country</th>
          <th>Eliminated</th>
        </tr>
        {this.renderTableData()}
      </table>
    );
  } 
}

function App() {
  return (
    <div className="App">
      <Title title="Listings" />
      <ClubTable />
    </div>
  );
}

export default App;
