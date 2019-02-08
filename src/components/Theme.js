import { createMuiTheme } from "@material-ui/core/styles";
//how to use mui color tool to determin palette
//https://material.io/tools/color/#!/?view.left=0&view.right=1

//how to use mui theme
//https://material-ui.com/customization/themes/#type-light-dark-theme-
//med Grey #e1e2e1 
//rgb(225,226,225)

//lightGrey #f5f5f6
//rgb(245,245,246)


//primary purple
//main #582a72
//light #8755a1
//dark #2b0046

//secondary green
//main #7a9f35
//light #abd064
//dark  #4a7000

export default props => {
  return createMuiTheme({
    palette: {
      type: "light",
      //middle purple
      primary: { main: "#582A72" },
      //middle Green
      secondary: { main: "#7A9F35" },
      myBlue: "#343477",
    },
    typography: {
      //fixes deprecated typography variants warning
      useNextVariants: true,
      //fontFamily: '"Arial", Helvetica, sans-serif'
    },

  });
};