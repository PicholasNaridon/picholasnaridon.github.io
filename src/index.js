import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './Router/AppRouter';
import './assets/styles/reset.css'
import './assets/styles/static.css'


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
