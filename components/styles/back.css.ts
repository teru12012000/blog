import {style} from "@vanilla-extract/css";

const backstyle={
  content:style({
    width:"50px",
    textAlign:"center",
    marginLeft:"30px",
    marginTop:"10px",
  }),
  icon:style({
    ':hover':{
      fontSize:"50px",
      transition:"0.4s"
    }
  }),
  p:style({
    margin:"0",
    fontSize:"20px",
    textAlign:"center",
  }),
}


export default backstyle;