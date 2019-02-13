import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import LineChart from "./LineChart";
import currentCoinPrice from "./currentCoinPrice";

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
			selectedCoin: this.props.selectedCoin,
			currentPrice: ""
		};
		this.pollPriceData = this.pollPriceData.bind(this);
	}

	componentDidMount() {
		//**********************
		//un-comment for price polling keeping off during development
		//so I don't get blocked for too many requests
		setInterval(this.pollPriceData, 1000);
		//**********************
	} //END componentDidMount()

	componentWillReceiveProps(nextProps) {
		//console.log("@@ChartCon Props Changed@@")
		//console.log("Line Chart nextProps",nextProps)
		this.setState({
			selectedCoin: nextProps.selectedCoin
		});
	}

	pollPriceData = () => {
		currentCoinPrice(this.props.selectedCoin.toUpperCase()).then(resp => {
			console.log("currentCoinPrice() ", resp.USD);
			this.setState({
				currentPrice: resp.USD
			});
		});
	};

	render() {
		//console.log("@#@#@#@#", this.props);
		const { classes } = this.props;
		return (
			<div>
				<Typography className={classes.themeExample}>
					Chart Container
				</Typography>
				<Typography>
					Current {this.state.selectedCoin.toUpperCase()} Price $
					{this.state.currentPrice}
				</Typography>
				<LineChart selectedCoin={this.state.selectedCoin} />
			</div>
		);
	}
}

export default withStyles(styles)(ChartCon);
//<LineChart selectedCoin={this.state.selectedCoin}  />
