import { style } from "@vanilla-extract/css";

const styleKingPage={
  aboutPage:style({
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center",
    '@media':{
      'screen and (max-width:352px)':{
        fontSize:15,
      }
    }
  }),
  containar:style({
    width:"75%",
    margin:"10px auto",
    '@media':{
      'screen and (max-width:890px)':{
        width:"100%",
        margin:0,
        marginTop:"10px"
      }
    }
  }),
  numberlist:style({
    fontSize:15,
  }),
}

export default styleKingPage;

