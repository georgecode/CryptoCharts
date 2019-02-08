import React from 'react';
import Select from 'react-select';
import bat from "@icon/cryptocurrency-icons/icons/bat.svg";
import coinOptions from "./coinOptions";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  headerCon:{
    backgroundColor:theme.palette.primary.main
  },
  searchCon:{
    margin:"0 auto",
    marginRight: "5%",
    marginLeft:"5%",
    appearance: "none",
    paddingBottom:"20px"
  },

});
 
class SearchBox extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { classes } = this.props
    const { selectedOption } = this.state;
 
    return (
    <div>
      <Select
        className ={classes.searchCon}
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

//export default SearchBox
export default withStyles(styles)(SearchBox);

//<img src={bat} alt="coin"/>


