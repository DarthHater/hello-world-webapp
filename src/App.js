import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      person: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/persons/list')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ persons: data})
      })
      .catch(console.log)
  }

  render() {
    return (
      <React.Fragment>
          {this.state.persons.map((x) => (
            <h1>{x.Person}</h1>
          ))}
      </React.Fragment>
    );
  }
}

export default App;
