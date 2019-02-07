import React from 'react';

import btc from "@icon/cryptocurrency-icons/icons/btc.svg";
import xrp from "@icon/cryptocurrency-icons/icons/xrp.svg";
import eth from "@icon/cryptocurrency-icons/icons/eth.svg";
import eos from "@icon/cryptocurrency-icons/icons/eos.svg";
import bch from "@icon/cryptocurrency-icons/icons/bch.svg";
// import usdt from "@icon/cryptocurrency-icons/icons/usdt.svg";
// import ltc from "@icon/cryptocurrency-icons/icons/ltc.svg";
// import trx from "@icon/cryptocurrency-icons/icons/trx.svg";
// import xlm from "@icon/cryptocurrency-icons/icons/xlm.svg";
// import bnb from "@icon/cryptocurrency-icons/icons/bnb.svg";
// //No BSV logo yet so using BTC logo
// import bsv from "@icon/cryptocurrency-icons/icons/btc.svg";
// import ada from "@icon/cryptocurrency-icons/icons/ada.svg";
// import xmr from "@icon/cryptocurrency-icons/icons/xmr.svg";
// import miota from "@icon/cryptocurrency-icons/icons/miota.svg";
// import dash from "@icon/cryptocurrency-icons/icons/dash.svg";
// import neo from "@icon/cryptocurrency-icons/icons/neo.svg";
// import etc from "@icon/cryptocurrency-icons/icons/etc.svg";
// import xem from "@icon/cryptocurrency-icons/icons/xem.svg";
// import mkr from "@icon/cryptocurrency-icons/icons/mkr.svg";
// //No USDC logo yet so using USD logo
// import usdc from "@icon/cryptocurrency-icons/icons/usd.svg";
// //^^ TOP 20 as of 2/7/19^^
// import zec from "@icon/cryptocurrency-icons/icons/zec.svg";
// import waves from "@icon/cryptocurrency-icons/icons/waves.svg";
// import xtz from "@icon/cryptocurrency-icons/icons/xtz.svg";
// import doge from "@icon/cryptocurrency-icons/icons/doge.svg";
// import tusd from "@icon/cryptocurrency-icons/icons/tusd.svg";

import bat from "@icon/cryptocurrency-icons/icons/bat.svg";
console.log(bat)
const styles = {
	test:{

	},
	icon:{
		width:"20px",
		height:"20px",
	},
	ticker:{
		fontWeight:700
	}

}


//Makes JSX label
let labelMaker= (icon,name,ticker)=>{
	return(
		<span>
			<img style={styles.icon} src= {icon} alt={name}></img>
			<span style={styles.test}> {name}</span>
			<span style={styles.ticker}> ({ticker})</span>
		</span>
		)
}

const coinOptions = () => {
return(
	[
	  { value: 'btc bitcoin', label: labelMaker(btc,"Bitcoin","BTC") },
	  { value: 'xrp ripple', label: labelMaker(xrp,"XRP","XRP") },
	  { value: 'eth ethereum', label: labelMaker(eth,"Ethereum","ETH") },
	  { value: 'eos', label: labelMaker(eos,"EOS","EOS") },
	  { value: 'bch bitcoin cash', label: labelMaker(bch,"Bitcoin Cash","BCH") },
	  // { value: 'xxx', label: labelMaker(xxx,"Xxx","XXX") },
	  // { value: 'neo', label: labelMaker(neo,"NEO","NEO") },
	  // { value: 'bat', label: <span><img style={styles.icon} src={bat}></img><span style={styles.test}>hello</span></span>},
	]
)
}

export default coinOptions;


