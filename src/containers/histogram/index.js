import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import presenter from './presenter';
import * as actions from '../../actions/histogram';

class Histogram extends Component {
	render() {
		return presenter(this.props.fetchGraphData, () => {console.log(this)});
	}
}

// пропсы, которые мы хотим получить из глобального стора (вернуть в виде объекта)
function mapStateToProps(state) {
	return {
		histogram: state.histogram
	};
}
function mapDispatchToProps(dispatch) {
  return {
    reDraw: bindActionCreators(actions.reDraw, dispatch),
    addLine: bindActionCreators(actions.addLine, dispatch),
    fetchGraphData: bindActionCreators(actions.fetchGraphData, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Histogram);