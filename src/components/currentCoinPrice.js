import axios from "axios";

const currentCoinPrice = (coin = "BTC") => {
	return axios({
		method: "get",
		url: `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`
	}).then(response => {
		//console.log(response.data.Data[0])
		return response.data;
	});
};

export default currentCoinPrice;
