import { style } from "@vanilla-extract/css";

const head={
  header:style({
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
    padding:"5px",
    '@media':{
      'screen and (min-width:890px)':{
        display:"flex",
        justifyContent:"space-between",
      }
    }
  }),
  titletxt:style({
    fontSize:30,
    '@media':{
      'screen and (max-width:351px)':{
        fontSize:20,
      }
    }
  })

} 

export default head;