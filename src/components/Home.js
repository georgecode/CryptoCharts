import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChooseCoinCon from "./ChooseCoinCon"
//import SearchTest from "./SearchTest"
import Header from "./Header"
//import TestJunk from "./TestJunk"

//let btccoinzz = "btc"

const styles = theme => ({
	themeExample:{
		color: theme.palette.secondary.main
	}
});


class Home extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
 //     	module: null,
 //    	};
	// }
	// componentDidMount() {
 //    	const { path } = this.props;
 //    	import(`@icon/cryptocurrency-icons/icons/${btccoinzz}.svg`)
 //      	.then(module => this.setState({ module: module.default }))

 //  	}

	render() {
		console.log(this.state)
		const { classes } = this.props
		return(
			<div>
				<Header />
				
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
