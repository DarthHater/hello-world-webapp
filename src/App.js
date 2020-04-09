import React, { Component } from 'react'
import './App.css'
const axios = require('axios')

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      persons: [],
      person: {}
    }
  }

  componentDidMount() {
		axios.get('/persons/list')
			.then(data => {
				this.setState({ persons: data })
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
    )
  }
}

export default App
