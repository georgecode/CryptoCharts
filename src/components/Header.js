import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SearchBox from "./SearchBox";

const styles = theme => ({
	headerCon: {
		backgroundColor: theme.palette.primary.main
	}
});

class Header extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.headerCon}>
				<SearchBox
					//sendSearchData was passed from Home.js to Here(Header.js)
					//and will be passed from here to SearchBox.js
					sendSearchData={this.props.sendSearchData}
					className={classes.searchBox}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(Header);
