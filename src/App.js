import React from 'react'

// Components
import Input from './com/input'


const App = (props) => {
	return (
		<div style={{ flex: 1, width: '90%', margin:'auto', padding: 20 }}>
			<h1 style={{ textAlign:'center', margin: 0 }}>DiscoWord</h1>
			<h2 style={{ textAlign:'center', margin: 0 }}>Find new lao words</h2>
			<Input />
		</div>
	)
}

export default App