import React from 'react';
import { Chart } from 'react-google-charts';


export default function histogram(graphData = [], btnClick) {
	return (
		<div>			
			<div>Здесь будет график </div>

		<Chart
			chartType="ScatterChart"
			data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
			options={{}}
			graph_id="ScatterChart"
			width="100%"
			height="400px"
			legend_toggle
        />

			<button onClick={btnClick} type="button">Fetch graph data</button>
		</div>	
		);
}