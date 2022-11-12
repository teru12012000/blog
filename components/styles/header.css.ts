import { style } from "@vanilla-extract/css";

const head={
  header:style({
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
    padding:"5px",
    '@media':{
      'screen and (min-width:540px)':{
        display:"flex",
        justifyContent:"space-between",
      }
    }
  }),

} 

export default head;