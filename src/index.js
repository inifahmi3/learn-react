import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
// import App from './App';
// import Mine from './Mine';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
