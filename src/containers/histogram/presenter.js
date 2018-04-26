import React from 'react';
import {BarChart} from 'react16-d3-basic';

// import generalChartData from 'dsv?delimiter=\t!../data/letter.tsv';
// const generalChartData = [{
//     label: 'somethingA',
//     values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
// }];
const generalChartData =[
      {x: 'A', y: 20},
      {x: 'B', y: 30},
      {x: 'C', y: 40},
      {x: 'D', y: 20},
      {x: 'E', y: 40},
      {x: 'F', y: 25},
      {x: 'G', y: 5}
    ];



  const width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10, "%"];




export default function histogram(graphData = [], btnClick) {
	return (
		<div>
			<BarChart
				title= {title}
				data= {generalChartData}
				width= {width}
				height= {height}
				chartSeries = {chartSeries}
				x= {x}
				xLabel= {xLabel}
				xScale= {xScale}
				yTicks= {yTicks}
				yLabel = {yLabel}
		    />
			<div>Здесь будет график </div>
			<button onClick={btnClick} type="button">Fetch graph data</button>
		</div>	
		);
}