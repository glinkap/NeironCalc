import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as graphActions from '../actions/graphActions';
import Chart from './chart/index';

class App extends Component {
	
	render() {
		return (
			<div>	
				<Chart />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {state};
}
function mapDispatchToProps(dispatch) {
	return {pageActions: bindActionCreators(graphActions, dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(App);