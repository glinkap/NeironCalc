import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import presenter from './presenter';
import * as actions from '../../actions/histogram';

class Histogram extends Component {
	render() {
		return presenter();
	}
}

function mapStateToProps(state) {
	return {state};
}
function mapDispatchToProps(dispatch) {
  return {
    reDraw: bindActionCreators(actions.reDraw(), dispatch),
    addLine: bindActionCreators(actions.addLine(), dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Histogram);