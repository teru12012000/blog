import {style} from "@vanilla-extract/css";


const home={
  h2:style({
    textAlign:"center",
  }),
  li:style({
    width:"90%",
    margin:"auto",
    marginTop:"20px",
  }),
  inlink:style({
    width:"275px",
    display:"inline-block",
    border:"2px solid black",
    borderRadius:"5px",
    ':hover':{
      color:"blue",
      backgroundColor:"yellow",
      transition:"0.6s",
    }
  }),
}

export default home;