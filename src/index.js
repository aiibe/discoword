import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// Initialize...
ReactDOM.render(
	<App />, 
	document.getElementById('wrapper')
);

module.hot.accept();