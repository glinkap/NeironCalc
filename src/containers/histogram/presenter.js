import React from 'react';
import { Chart } from 'react-google-charts';


export default function histogramMarkup(btnFetchGraphData) {
	return (
		<div>			
			<button  onClick={() => btnFetchGraphData()} type="button">Fetch graph data</button>
			<div>график ScatterChart</div>

			<Chart
				chartType="ScatterChart"
				data={[
					['Age', 'Weight'],
			          [ 8,      12],
			          [ 4,      5.5],
			          [ 11,     14],
			          [ 4,      5],
			          [ 3,      3.5],
			          [ 6.5,    7]]
			        }
				options={{}}
				graph_id="ScatterChart"
				width="100%"
				height="400px"
				legend_toggle
	        />
	       
		</div>	
		);
}