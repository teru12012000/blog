import { style } from "@vanilla-extract/css";


const linkstyle={
  li:style({
    display:"inline-block",
    textAlign:"center",
    marginTop:"20px",
    marginLeft:"10px",
  }),
  link:style({
    ':hover':{
      color:"aqua",
      transition:"0.6s",
    }
  })
}

export default linkstyle;
