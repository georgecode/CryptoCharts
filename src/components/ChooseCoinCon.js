import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

let btccoinzz = "btc"

const styles = theme => ({
	themeExample:{
		color: theme.palette.secondary.main
	}
});

class ChooseCoinCon extends Component {
	constructor(props) {
		super(props);
		this.state = {
     	module: null,
    	};
	}
	componentDidMount() {
		//Dynamic Import example
    	const { path } = this.props;
    	import(`@icon/cryptocurrency-icons/icons/${btccoinzz}.svg`)
      	.then(module => this.setState({ module: module.default }))

  	}

	render() {
		const { classes } = this.props
		return(
			<div>
				<img
				//Dynamic Import example 
				src={this.state.module} 
				alt="coin"
				/>
				<Typography variant="h6" className={classes.themeExample}>ChooseCoinCon</Typography>
			</div>
			)
	}
}

export default withStyles(styles)(ChooseCoinCon);


