import axios from "axios";


//histoday == daily data
//histohour == hourly data
//histominute == minute data
const coinData = (coin,limit =20,precision = "histoday") => {
	return axios({
    method: "get",
    url: `https://min-api.cryptocompare.com/data/${precision}?fsym=${coin}&tsym=USD&limit=${limit}&aggregate=12&e=CCCAGG`
  }).then((response)=> {
  	//console.log(response.data.Data[0])
    return response.data.Data;
  });
}

export default coinData;