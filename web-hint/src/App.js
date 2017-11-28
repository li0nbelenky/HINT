import React, { Component } from 'react';
import './App.css';
import Feed from './components/feed/Feed';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    this.state = {
      myHints: myArray,
      username: ''
    };
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('myHints');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          subtitle: items[item].subtitle
        });
      }
      this.setState({
        myHints: newState
      });
    });
  }
  render() {
    return <Feed />;
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('myHints');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

export default App;
