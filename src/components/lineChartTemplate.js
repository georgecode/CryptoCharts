//import axios from "axios";
import HighStocks from "highcharts/highstock";

//lineChartTemplate(location,coin,data)

const lineChartTemplate = (location, coin, data) => {
	return new HighStocks["stockChart" || "stockChart"](location, {
		chart: {
			type: "spline"
		},
		rangeSelector: {
			selected: 1
		},
		title: {
			//text: `${coin}/USD?`
			text: ""
		},
		series: [
			{
				name: `${coin}/USD?`,
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}
		], //End series
		tooltip: {
			valueDecimals: 2,
			style: {
				color: "white"
			},
			backgroundColor: "#25353E",
			borderColor: "#64a8ff",
			borderRadius: 20,
			valuePrefix: "$ "
		}
	});
}; //END lineChartTemplate

export default lineChartTemplate;
