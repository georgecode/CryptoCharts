import axios from "axios";

const formatLineChartData = data => {
	//console.log("Line Chart data", data[0], data[1]);
	return data.reduce((total, amount) => {
		//*price is the average of high and low
		total.push([amount.time * 1000, (amount.high + amount.low) / 2]);
		return total;
	}, []);
};

export default formatLineChartData;
