import React, { Component } from "react";
import Select from "react-select";
//import bat from "@icon/cryptocurrency-icons/icons/bat.svg";
import coinOptions from "./coinOptions";
import { withStyles } from "@material-ui/core/styles";
import coinData from "./coinData";

const styles = theme => ({
  headerCon: {
    backgroundColor: theme.palette.primary.main
  },
  searchCon: {
    margin: "0 auto",
    marginRight: "5%",
    marginLeft: "5%",
    appearance: "none",
    paddingBottom: "20px"
  }
});

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    //console.log(`Option selected:`, selectedOption);

    //sendSearchData was passed from Home.js to Header.js to SearchBox.js
    //This function is bound to Home.js as getSearchData(val)
    this.props.sendSearchData(selectedOption.value.split(" ")[0]);
  };
  render() {
    const { classes } = this.props;
    const { selectedOption } = this.state;

    return (
      <div>
        <Select
          className={classes.searchCon}
          placeholder="Select Token"
          value={selectedOption}
          onChange={this.handleChange}
          //coinsOptions returns an array of coin values and label's (names, tickers, and icons)
          options={coinOptions()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchBox);

//<img src={bat} alt="coin"/>
