import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './Router/AppRouter';
import './Homepage/assets/styles/reset.css'
import './Homepage/assets/styles/static.css'


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
