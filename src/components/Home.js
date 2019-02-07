import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChooseCoinCon from "./ChooseCoinCon"

const styles = theme => ({
	themeExample:{
		color: theme.palette.secondary.main
	}
});

class Home extends Component {
	//constructor(props) {
	//	super(props);
	//	this.state = {
    //  	hello: true,
    //	};
	//}

	render() {
		const { classes } = this.props
		return(
			<div>
				<ChooseCoinCon />
				<Typography variant="h2" className={classes.themeExample}>Home</Typography>
			</div>
			)
	}
}

export default withStyles(styles)(Home);


