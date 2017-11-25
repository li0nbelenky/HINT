import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hint from './Hint'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const myArray = [{title: 'Arie Belenky', subtitle: 'Software Developer'},
                {title: 'Zigi Bigule', subtitle: 'Software Engineer'}];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
      <ul>
      {myArray.map((item, index) =>
          <li> <Hint title = {item.title} subtitle={item.subtitle} /></li>
          )}
      </ul>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
