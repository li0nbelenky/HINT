import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hint from './Hint'

const myArray = [{name: 'Arie'},
                {name: 'Zigi'}];

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
      {myArray.map((item, index) =>
          <li> <Hint name = {item.name}/></li>
          )}
      </ul>
      </div>
    );
  }
}

export default App;
