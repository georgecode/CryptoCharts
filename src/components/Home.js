import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChooseCoinCon from "./ChooseCoinCon"
//import SearchTest from "./SearchTest"
import Header from "./Header"
//import TestJunk from "./TestJunk"
import ChartCon from "./ChartCon"

//let btccoinzz = "btc"

const styles = theme => ({
	themeExample:{
		color: theme.palette.secondary.main
	}
});


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
     	module: null,
     	selectedCoin:"btc"
    	};
    	this.getSearchData = this.getSearchData.bind(this)
	}
	// componentDidMount() {
 //    	const { path } = this.props;
 //    	import(`@icon/cryptocurrency-icons/icons/${btccoinzz}.svg`)
 //      	.then(module => this.setState({ module: module.default }))

 //  	}
 	//getSearchData will be passed down to SearchBox.js via Header.js
 	//It allows the search data to be passed to this page(Home.js)
	getSearchData(val){
	    // do not forget to bind this to constructor
	    //this.getData = this.getData.bind(this)
	    //Parent HTML
	    //<Child sendData={this.getData}/>
	    this.setState({
		    selectedCoin: val
		});
	    console.log(val);
	}





	render() {
		console.log(this.state)
		const { classes } = this.props
		return(
			<div>
				<Header 
				//This will be passed down form here(Home.js)
				//to Header.js to Searchbox.js
				//it allows searchbox to pass data to here(Home.js)
				sendSearchData={this.getSearchData} 
				/>
				<ChartCon selectedCoin={this.state.selectedCoin} />

				
				<ChooseCoinCon />
				<Typography variant="h2" className={classes.themeExample}>Home</Typography>
			</div>
			)
	}
}

export default withStyles(styles)(Home);
//<SearchTest />
//<TestJunk />

//<img src={this.state.module} alt="coin"/>
//<img src={coinIcon} alt="coin" />
