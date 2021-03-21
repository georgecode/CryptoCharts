import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import ChartCon from "./ChartCon";
import Footer from "./Footer";

const styles = theme => ({
	themeExample: {
		//color: theme.palette.secondary.main
	}
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			module: null,
			selectedCoin: "btc"
		};
		this.getSearchData = this.getSearchData.bind(this);
	}

	//getSearchData will be passed down to SearchBox.js via Header.js
	//It allows the search data to be passed to this page(Home.js)
	getSearchData(val) {
		this.setState({
			selectedCoin: val
		});
		//console.log(val);
	}

	render() {
		console.log(this.state);
		const { classes } = this.props;
		return (
			<div>
				<Header
					//This will be passed down form here(Home.js)
					//to Header.js to Searchbox.js
					//it allows searchbox to pass data to here(Home.js)
					sendSearchData={this.getSearchData}
				/>
				<ChartCon selectedCoin={this.state.selectedCoin} />
				<Footer />
			</div>
		);
	}
}

export default withStyles(styles)(Home);
