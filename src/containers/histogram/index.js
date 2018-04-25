import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import presenter from './presenter';
import * as actions from '../../actions/histogram';
    console.log("actions.reDraw()", actions.reDraw());

class Histogram extends Component {
	render() {
		return presenter([], () => this.props.reDraw());
	}
}

// пропсы, которые мы хотим получить из глобального стора (вернуть в виде объекта)
function mapStateToProps(state) {
	return {};
}
function mapDispatchToProps(dispatch) {
  return {
    reDraw: bindActionCreators(actions.reDraw, dispatch),
    addLine: bindActionCreators(actions.addLine, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Histogram);