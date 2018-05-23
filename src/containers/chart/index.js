import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as graphActions from '../../actions/graphActions';
import { Chart } from 'react-google-charts';

class GoogleChart extends Component {
	componentWillMount() {
		// this.props.fetchGraphData();
	}
	componentWillUnmount() {}
	render() {
		return (
			<div>			
				// <button  onClick={() => this.props.getData({id: 2, chartType: 'histogram'})} type="button">Fetch graph data</button>
				<div>график LineChart</div>

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
    setGraph: bindActionCreators(graphActions.setChart, dispatch),
    fetchGraphData: bindActionCreators(graphActions.fetchGraphData, dispatch),
    getData: (params) => dispatch(graphActions.getData(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GoogleChart);