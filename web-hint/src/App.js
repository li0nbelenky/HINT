import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hint from './Hint';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from './firebase.js';
const myArray = [
  { title: 'Arie Belenky', subtitle: 'Software Developer' },
  { title: 'Zigi Bigule', subtitle: 'Software Engineer' }
];

// will currently act as feed
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
    return (
      <MuiThemeProvider>
        <div className="App">
          <ul>
            {this.state.myHints.map((item, index) => (
              <li>
                {' '}
                <Hint {...item} />
              </li>
            ))}
          </ul>
        </div>
      </MuiThemeProvider>
    );
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
