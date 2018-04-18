import React from 'react';

export default function histogram(graphData = [], fetchGraph) {
	return (
		<div>
			<div>Здесь будет график </div>
			<button onClick={fetchGraph} type="button">Fetch graph data</button>
		</div>	
		);
}