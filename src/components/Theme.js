import { createMuiTheme } from "@material-ui/core/styles";
//how to use mui color tool to determin palette
//https://material.io/tools/color/#!/?view.left=0&view.right=1

//how to use mui theme
//https://material-ui.com/customization/themes/#type-light-dark-theme-

export default props => {
  return createMuiTheme({
    palette: {
      type: "light",
      //dark Brown
      primary: { main: "#553100" },
      //light blue
      secondary: { main: "#8080B3" },
      myBlue: "#343477",
    },
    typography: {
      //fixes deprecated typography variants warning
      useNextVariants: true,
      //fontFamily: '"Arial", Helvetica, sans-serif'
    },

  });
};