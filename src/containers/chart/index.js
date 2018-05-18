import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/histogram';
import { Chart } from 'react-google-charts';

class GoogleChart extends Component {
	render() {
		return (
			<div>			
				<button   type="button">Fetch graph data</button>
				<div>график ScatterChart</div>

				<Chart
					chartType="LineChart"
					data={this.props.chart.dataChart}
					options={{}}
					graph_id="LineChart"
					width="100%"
					height="400px"
		        />
	       
			</div>	
		);
	}
}

// пропсы, которые мы хотим получить из глобального стора (вернуть в виде объекта)
function mapStateToProps(state) {
	return {
		chart: state.chart
	};
}
function mapDispatchToProps(dispatch) {
  return {
    setGraph: bindActionCreators(actions.reDraw, dispatch),
    fetchGraphData: bindActionCreators(actions.fetchGraphData, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GoogleChart);