import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import AddHint from './components/AddHint'
import Trends from './components/Trends'

const Home = () => (
  <div>
    <App />
  </div>
);

const ProjectRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/trends">Trends</Link></li>
          <li><AddHint /></li>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}/>
        <Route exact path="/trends" component={Trends}/>
    </div>
  </Router>
);
export default ProjectRouter