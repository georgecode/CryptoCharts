import React from "react";
import Select from "react-select";
import bat from "@icon/cryptocurrency-icons/icons/bat.svg";
import coinOptions from "./coinOptions";
let test = `<img src=${bat} alt="coin"/>`;
//https://imgur.com/vFblFqJ
//console.log(coinOptions())
//let myMoneyImage = "https://i.imgur.com/vFblFqJ.jpg"

// const options = [
//   { value: 'bat', label: <span><img src={bat}></img></span>},
//   { value: 'btc', label: 'Btc' },
//   { value: 'eth', label: 'ETH' }
// ];

const options = coinOptions();

class SearchTest extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    console.log(test);
    const { selectedOption } = this.state;

    return (
      <div>
        <Select
          placeholder="Select Token"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default SearchTest;

//<img src={bat} alt="coin"/>
