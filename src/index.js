import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LittleComponent from './components/LittleComponent';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LittleComponent />, document.getElementById('l'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
