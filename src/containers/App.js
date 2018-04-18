import React, { Component } from 'react';
import { connect } from 'react-redux';
import Histogram from './histogram/index'

class App extends Component {
	render() {
		return (
			<div>	
				<div>App2test {this.props.state.histogram.loaded.toString()}</div>
				<Histogram />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {state};
}
export default connect(mapStateToProps)(App);