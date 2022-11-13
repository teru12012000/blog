import {style} from "@vanilla-extract/css";


const home={
  h2:style({
    textAlign:"center",
  }),
  li:style({
    width:"90%",
    margin:"auto",
    textAlign:"center",
  }),
  inlink:style({
    width:"275px",
    height:"300px",
    marginTop:"20px",
    textAlign:"left",
    display:"inline-block",
    border:"2px solid black",
    borderRadius:"5px",
    ':hover':{
      color:"blue",
      backgroundColor:"yellow",
      transition:"0.6s",
    },
    '@media':{
      'screen and (min-width:550px)':{
        marginRight:"20px",
      }
    }
  }),
  title:style({
    fontSize:"20px",
    height:"60px",
    margin:"auto",
  }),
  detail:style({
    height:"100px",
    overflowWrap:"break-word",
  })

}

export default home;