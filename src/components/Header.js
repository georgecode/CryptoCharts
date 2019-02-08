import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SearchBox from "./SearchBox"


const styles = theme => ({
	headerCon:{
		backgroundColor:theme.palette.primary.main
	},
	title:{
		color:"white"	
	},
	searchBox:{
		//marginRight:
	}
});

class Header extends Component {
	//constructor(props) {
	//	super(props);
	//	this.state = {
    //  	hello: true,
    //	};
	//}

	render() {
		const { classes } = this.props
		return(
			<div className={classes.headerCon}>
				<Typography className={classes.title}>Header</Typography>
				<SearchBox className={classes.searchBox}/>
			</div>
			)
	}
}

export default withStyles(styles)(Header);


