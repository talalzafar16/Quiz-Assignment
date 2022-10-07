import React from 'react'
import Download from './pics/Download.png';
import Capture from './pics/Capture.png';
import './Home.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import{useHistory} from "react-router-dom";

export default function Home() {
  // let history=useHistory();
  return (
    <div className="body">
      <Grid>
        <Box className="box">
          <img src={Download} alt="#" height="125px" style={{paddingLeft:"43px"}}/>
          <Typography variant="p"style={{paddingLeft:"60px",fontFamily:"'Georgia', Times, serif" ,fontWeight:"bold", color:"rgb(247, 243, 243)"}} >Free Quiz For Everyone </Typography>
          <img  alt="#" src={Capture} height="165px" id="image"/>
          {/* <Button id="button" onClick={()=>{history.push("/Quiz")}} >Play</Button>    */}
          <Button id="login">Log in</Button>
          <Button id="signup">Sign up</Button>
        </Box>
      </Grid>
    </div>
  )
}
