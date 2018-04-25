import React from 'react';

export default function histogram(graphData = [], btnClick) {
	return (
		<div>
			<div>Здесь будет график </div>
			<button onClick={btnClick} type="button">Fetch graph data</button>
		</div>	
		);
}