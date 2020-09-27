import React from 'react';
import './App.css';

const exampleData = [
  {
      "id": 2610,
      "name": "Olympiacos",
      "country": "Greece",
      "eliminated": true
  },
  {
      "id": 7889,
      "name": "Liverpool",
      "country": "England",
      "eliminated": true
  }
];


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


  componentDidMount() {
    this.setState({
      clubs: exampleData
    });
  }

  renderTableData() {
    return this.state.clubs.map((club, index) => {
      const {id, name, country} = club;
      const eliminated = club.eliminated ? "True" : "False";
      return (
        <tr>
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
      <table>
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
