import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectRouter from './ProjectRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProjectRouter />, document.getElementById('root'));
registerServiceWorker();
