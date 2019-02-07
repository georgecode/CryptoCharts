import React, { Component } from "react";

const styles={
	test:{
		color:'red',
		background:'blue'
	}
}

class MyClass extends Component {
	//constructor(props) {
	//	super(props);
	//}

	render() {
		return(
			<h1 style={styles.test} >My react Class</h1>
			)
	}
}
export default MyClass;		
