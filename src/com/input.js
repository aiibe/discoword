import React from 'react'

// Components

class Input extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			textContent: "",
			textBoxSize: 15
		}
	}


	textChange(event){
		this.setState({ textContent: event.target.value })
		if (this.state.textContent.length > 0) { this.setState({ buttonActive: true }) }
		if (this.state.textContent.length < 4) { this.setState({ buttonActive: false }) }
	}


	render() {

		return (
			<div style={{ marginTop: 20 }}>
				<div style={{ display:'flex', alignItems:'baseline', justifyContent: 'space-between' }}>
					<h4 style={{ margin: 0 }}>{"Add text to analyze (" + this.state.textContent.length + ' characters)'}</h4>
					{
						this.state.textContent.length >= 2 ?
						(
							<button
							style={{ backgroundColor: '#0cd50e', borderRadius: 3, border:'1px solid #0cd50e'}} 
							onClick={() => console.log('hello pressed')}>
								<h4 style={{ margin: 0, padding: 5, color: '#fff'}}>Analyze</h4>
							</button>
						)
						:
						(
							<button 
							disabled
							style={{ borderRadius: 3, border:'1px solid #e4e4e4', backgroundColor:'#fff'}}>
								<h4 style={{ margin: 0, padding: 5, color: '#e4e4e4'}}>Analyze</h4>
							</button>
						)
					}
				</div>
				<textarea
				onChange={ (event) => this.textChange(event) }
				value={ this.state.textContent } 
				rows={this.state.textBoxSize} 
				style={{ width:'100%', boxSizing:'border-box', border: '2px solid #e4e4e4', borderRadius: 5, marginTop: 15, resize:'vertical', fontSize: 16, padding: 10}}/>
			</div>
		)
	}
}


export default Input