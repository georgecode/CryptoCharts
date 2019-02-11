import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import LineChart from "./LineChart";

const styles = theme => ({
	themeExample: {
		color: theme.palette.secondary.main
	}
});

class ChartCon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: true,
			selectedCoin: this.props.selectedCoin
		};
	}

	componentWillReceiveProps(nextProps) {
		//console.log("@@ChartCon Props Changed@@")
		//console.log("Line Chart nextProps",nextProps)
		this.setState({
			selectedCoin: nextProps.selectedCoin
		});
	}

	render() {
		console.log("@#@#@#@#", this.props);
		const { classes } = this.props;
		return (
			<div>
				<Typography className={classes.themeExample}>
					Chart Container
				</Typography>
				<LineChart selectedCoin={this.state.selectedCoin} />
			</div>
		);
	}
}

export default withStyles(styles)(ChartCon);
//<LineChart selectedCoin={this.state.selectedCoin}  />
