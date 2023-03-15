import {style} from "@vanilla-extract/css";

const blogstyle={
  content:style({
    width:"80%",
    margin:"30px auto",
    '@media':{
      'screen and (max-width:400px)':{
        width:"95%",
      }
    }
  }),
}

export default blogstyle;