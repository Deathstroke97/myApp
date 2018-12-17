import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person : [
      {name: 'Azat', age: 21},
      {name: 'Askar', age: 17},
      {name: 'Almas', age: 11},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/>
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age}>My hobbies: Racing</Person>
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
