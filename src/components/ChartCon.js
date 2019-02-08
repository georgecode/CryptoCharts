import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import LineChart from "./LineChart";

const styles = theme => ({

	themeExample:{
		color: theme.palette.secondary.main
	}
});

class ChartCon extends Component {
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
				<Typography className={classes.themeExample}>Chart Container</Typography>
				<LineChart />
			</div>
			)
	}
}

export default withStyles(styles)(ChartCon);


