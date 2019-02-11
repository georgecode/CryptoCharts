import axios from "axios";
//Crypto Compare API
//https://min-api.cryptocompare.com/documentation

//API persion options
//histoday == daily data
//histohour == hourly data
//histominute == minute data
const coinData = (coin, limit = 2000, precision = "histoday") => {
	return axios({
		method: "get",
		//url: `https://min-api.cryptocompare.com/data/${precision}?fsym=${coin}&tsym=USD&limit=${limit}&aggregate=1&e=CCCAGG`
		url: `https://min-api.cryptocompare.com/data/${precision}?fsym=${coin}&tsym=USD&limit=${limit}&aggregate=1&e=Bitfinex`

		//Crypto compare API aggeregation end point keeps breaking
		//keeping these here for testing until their sereve stops having issues
		//url: `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10&aggregate=1&e=CCCAGG`
		//url: `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10&e=Bitfinex`
	}).then(response => {
		//console.log("Coin Data.js", response.data.Data);
		return response.data.Data;
	});
};

export default coinData;
