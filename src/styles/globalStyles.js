import { createGlobalStyle } from "styled-components";



export const LightTheme = {

  // body: '#d4cec9',
  body: '#ebece6',
  text: '#010101',
  grey: '#7D7F7B',
  main: '#FEAD01', 
  // default: '#CC6743'
  default: '#1B2431'
}




export const DarkTheme = {
  body: "black",
  text: "#FFF",
  main: '#FEAD01',
  grey: '#7D7F7B',
  // default:"#1B2431",
  default:"#3F012C"
}


export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}

body {
  margin: 0;
  padding:0;
  background:grey;
  //font-family: "Abhaya Libre", serif;
  font-family: "Abel", sans-serif;

*, *::before,*::after, h1,h2,h3,h4,h5, ul{
    margin:0;
    padding:0
}

a{
  text-decoration: none;
}

&::-webkit-scrollbar{
  display: none;
}

`


// &:hover{ }
// &::-webkit-scrollbar{


// const colors = {
//   // body: "#D9ECF0", //default
//   grape: '#FD5956',// grape
//   grapy: '#6C3461', //grape
//   brown: "#CC6743", //BROWN //*
//   burntsienna: '#B04E0F',

//   //text & body
//   darkgrey: '#968A84',
//   goosygrey: '#7D7F7B',
//   green: '#1F6357',
//   greenblue: '#42B395',
//   teagreen: '#BDF8A3',
//   pink: '#C3909B',
//   pinkishred: '#F10C45',
//   deeppink: '#DA467D',
//   purple: '#9900FA',
//   lightblue: '#26F7FD',
//   dodgerblue: '#3E82FC',
//   deepaqua: '#08787F',
//   neonblue: '#04D9FF',
//   lilac: '#EDC8FF',
//   blockydark: '#1B2431', // blocky dark
//   peacockblue: '#016795',
//   cobalt: '#1E488F', // cobalt


//   //text
//   // text: "#10016D",
//   yellow: "#FEAD01",
//   khaki: '#728639',
//   mint: '#E6DAA6',
//   brush: '#F19E8E',
//   teal: "#3F012C",

// }











