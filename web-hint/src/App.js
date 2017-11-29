import React, { Component } from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import TopTables from './components/TopTables'

class App extends Component {
  render() {
    return (
      <div>
        <Feed />
        <TopTables />
      </div>
    );
  }
}

export default App;
