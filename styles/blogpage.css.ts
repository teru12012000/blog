import {style} from "@vanilla-extract/css";

const blogstyle={
  content:style({
    width:"400px",
    margin:"30px auto",
    boxShadow:"0px 0px 5px",
    '@media':{
      'screen and (max-width:400px)':{
        width:"95%",
      }
    }
  })
}

export default blogstyle;