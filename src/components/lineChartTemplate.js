//import axios from "axios";
import HighStocks from "highcharts/highstock";
import btc from "@icon/cryptocurrency-icons/icons/btc.svg";

//lineChartTemplate(location,coin,data)

//****************************
//Color palette
//med Grey #e1e2e1
//rgb(225,226,225)

//lightGrey #f5f5f6
//rgb(245,245,246)

//primary purple
//main #582a72 rgba(88, 42, 114, 1)
//light #8755a1 rgba(135, 85, 161, 1)
//dark #2b0046 rgba(43, 0, 70, 1)

//secondary green
//main #7a9f35 rgba(122, 159, 53, 1)
//light #abd064 rgba(171, 208, 100, 1)
//dark  #4a7000 rgba(74, 112, 0, 1)
//***********************

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
				//*chart Line color
				//color: "#4a7000",
				color: "#7a9f35",
				//zoneAxis: "x",
				//Text in hover box
				name: `${coin}/USD`,
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}
		], //End series
		tooltip: {
			valueDecimals: 2,
			style: {
				//color: "white"
			},

			//Hover Box
			//backgroundColor: "red",
			//border of hover box
			//borderColor: "red",
			borderRadius: 20,
			valuePrefix: "$",
			padding: 10
		}
	});
}; //END lineChartTemplate

export default lineChartTemplate;
