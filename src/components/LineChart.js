import React, { Component } from "react";
import coinData from "./coinData";
import HighStocks from "highcharts/highstock";
import lineChartTemplate from "./lineChartTemplate";
import formatLineChartData from "./formatLineChartData";

class LineChart extends Component {
	componentDidMount() {
		//Line Chart accetped data Format [[time,price],[time,price]]
		//Example
		//[[1528243200000, 6457.78],
		// [1531353600000, 7718.21]]

		//returns coins data via crypto compare
		//coinData(coin, limit, precision)
		//coin is required, limit and precision are optional
		coinData("BTC")
			.then(resp => {
				//formats data for line chart [[time,price],[time,price]]
				return formatLineChartData(resp);
			})
			.then(value => {
				//Creates chart via template
				//lineChartTemplate(location to render, coin, plot data)
				this.chart = lineChartTemplate(this.chartDiv, "BTC", value);
			});
	}

	componentWillReceiveProps(nextProps) {
		let nextCoin = nextProps.selectedCoin.toUpperCase();
		//Sets charts Title via highCharts
		this.chart.setTitle({
			text: `${nextCoin}/USD`
		});
		//sets plot label via HighCharts
		this.chart.series[0].setName(nextCoin);

		//Requests data for new coin selection
		coinData(nextCoin)
			.then(resp => {
				//formats data for line chart [[time,price],[time,price]]
				return formatLineChartData(resp);
			})
			.then(value => {
				//Sets new plot data for LineCharts via highCharts function
				this.chart.series[0].setData(value);
			});
	} // END componentWillReceiveProps

	componentWillUnmount() {
		this.chart.destroy();
	}

	render() {
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
