import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LineChart from "./LineChart";
import currentCoinPrice from "./currentCoinPrice";
import btc from "@icon/cryptocurrency-icons/icons/btc.svg";

const styles = theme => ({
	themeExample: {
		color: theme.palette.secondary.main
	},
	container: {
		marginLeft: "10px",
		marginRight: "10px"
	},
	coinInfo: {
		height: "60px",
		backgroundColor: "white",
		margin: "0 auto"
	},
	icon: {
		width: "50px",
		height: "50px",
		marginLeft: "10px",
		marginTop: "10px",
		float: "left"
	},
	title: {
		color: theme.palette.secondary.main,
		fontSize: "1.4em",
		paddingLeft: "80px",
		paddingTop: "25px"
	}
});

class ChartCon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: true,
			selectedCoin: this.props.selectedCoin,
			currentPrice: "",
			coinImage: btc,
			priceColor: { color: "black" }
		};
		this.pollPriceData = this.pollPriceData.bind(this);
	}

	componentDidMount() {
		//**********************
		//un-comment for price polling keeping off during development
		//so I'm not spaming cryptocompare serve
		//setInterval(this.pollPriceData, 1000);
		setInterval(this.pollPriceData, 3600000);
		//**********************
	} //END componentDidMount()

	componentWillReceiveProps(nextProps) {
		//Dynamically imports Coin Icon when coin is selected
		import(`@icon/cryptocurrency-icons/icons/${
			nextProps.selectedCoin
		}.svg`).then(resp => {
			this.setState({
				coinImage: resp.default
			});
		});

		this.setState({
			selectedCoin: nextProps.selectedCoin,
			//Reset price so coin price always starts green
			currentPrice: ""
		});
	}

	//Polls cryptocompare for current coin price
	//Sets coin price state and color
	pollPriceData = () => {
		currentCoinPrice(this.props.selectedCoin.toUpperCase()).then(resp => {
			//Check to see if price has changed
			if (this.state.currentPrice != resp.USD) {
				//Sets the current price and color
				//Green for up red for down
				if (this.state.currentPrice > resp.USD) {
					this.setState({
						currentPrice: resp.USD,
						priceColor: { color: "red" }
					});
				} else {
					this.setState({
						currentPrice: resp.USD,
						priceColor: { color: "green" }
					});
				}
				console.log("currentCoinPrice() ", resp.USD);
			}
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.coinInfo}>
					<img
						className={classes.icon}
						src={this.state.coinImage}
						alt={this.state.selectedCoin}
					/>
					<Typography variant="h1" className={classes.title}>
						{this.state.selectedCoin.toUpperCase()}{" "}
						<span style={this.state.priceColor}>
							${this.state.currentPrice}
						</span>
					</Typography>
				</div>
				<LineChart selectedCoin={this.state.selectedCoin} />
			</div>
		);
	}
}

export default withStyles(styles)(ChartCon);
//<LineChart selectedCoin={this.state.selectedCoin}  />
