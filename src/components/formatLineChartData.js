import axios from "axios";

const formatLineChartData = data => {
	//console.log(data)
	return data.reduce((total, amount) => {
		//*price is the average of high and low
		total.push([amount.time * 1000, (amount.high + amount.low) / 2]);
		return total;
	}, []);
};

export default formatLineChartData;
