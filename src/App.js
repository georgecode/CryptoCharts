import React, { Component } from 'react';
import Home from "./components/Home"
import Theme from "./components/Theme"
import { MuiThemeProvider } from "@material-ui/core/styles";
//CssBaseline is MUI's version of normalize.css
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  constructor(props) {
    super(props);
    this.theme = Theme();
    //console.log("theme", this.theme);
  }
  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
         <CssBaseline />
        <div>
            <h1>App.js</h1>
            <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

// <img src={myImporttedImg} alt="itsApic" />
