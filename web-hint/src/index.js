import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import ProjectRouter from './ProjectRouter';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root'


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
