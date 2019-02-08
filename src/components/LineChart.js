import React, { Component } from "react";
import coinData from "./coinData";
import HighStocks from "highcharts/highstock";
//import axios from "axios";


// let dummyData=()=>{
// 	let dummyArray = [	[1528243200000, 6457.78],
// 		[1529280000000, 6203.8],
// 		[1530316800000, 6394.36],
// 		[1531353600000, 7718],
// 		[1532390400000, 7017.89],
// 		[1534464000000, 7091.38],
// 		[1535500800000, 6249.07],
// 		[1536537600000, 6762.06],
// 		[1537574400000, 6492.26] ]
// 		return(dummyArry.promise)
// }

class LineChart extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
	//Line Chart Format
	// [[],[],[]]
	// 0: (2) [1462492800000, 9.52]
	// 1: (2) [1462579200000, 9.27]


		// coinData("ETH").then(resp=>{
		// 	console.log("****resp resp resp ****",resp.seth)
		// })


		//coinData("ETH")
		coinData("ETH")
			.then(resp => {
				//return resp.seth
				// //console.log(resp.Data)
				return resp.reduce((total, amount) => {
					//*price is the average of the days high and low
					total.push([
						amount.time * 1000,
						(amount.high + amount.low) / 2
					]);
					return total;
				}, []);
			})
			.then(value => {
				console.log("HELLOVVVVV",value)
				this.chart = new HighStocks[this.props.type || "stockChart"](
					this.chartDiv,
					{
						chart:{
							type: 'spline'
						},
						rangeSelector: {
							selected: 1
						},
						title: {
							text: `${this.props.coin}/USD?`
						},
						series: [
							{
								name: `${this.props.coin}/USD?`,
								data: value,
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
					}
				);
			});
	} //END componentDidMount

	componentWillUnmount() {
		this.chart.destroy();
	}

	render() {
		//console.log(this.props.coin);
		return (
			<div>
			<h1>Line Chart</h1>
				<div
					ref={ref => {
						this.chartDiv = ref;
					}}
				/>
			</div>
		);
	}
} //END Chart component

export default LineChart;