import React from 'react'
import Download from './pics/Download.png';
import Capture from './pics/Capture.png';
import './Home.css';
import "./quiz.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TimerIcon from '@mui/icons-material/Timer';

export default function Quiz() {
  let[data,Setdata]=useState([{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ","correct_answer":"Richard Branson","incorrect_answers":["Alan Sugar","Donald Trump","Bill Gates"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What does a funambulist walk on?","correct_answer":"A Tight Rope","incorrect_answers":["Broken Glass","Balls","The Moon"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Area 51 is located in which US state?","correct_answer":"Nevada","incorrect_answers":["Arizona","New Mexico","Utah"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"How would one say goodbye in Spanish?","correct_answer":"Adi&oacute;s","incorrect_answers":[" Hola","Au Revoir","Salir"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the largest organ of the human body?","correct_answer":"Skin","incorrect_answers":["Heart","large Intestine","Liver"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?","correct_answer":"Gorilla","incorrect_answers":["Tiger","Panda","Crocodile"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?","correct_answer":"Spruce Goose","incorrect_answers":["Noah&#039;s Ark","Fat Man","Trojan Horse"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the first ever London Underground line to be built?","correct_answer":"Metropolitan Line","incorrect_answers":["Circle Line","Bakerloo Line","Victoria Line"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In which fast food chain can you order a Jamocha Shake?","correct_answer":"Arby&#039;s","incorrect_answers":["McDonald&#039;s","Burger King","Wendy&#039;s"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the Zodiac symbol for Gemini?","correct_answer":"Twins","incorrect_answers":["Fish","Scales","Maiden"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is the youngest person to recieve a Nobel Prize?","correct_answer":"Malala Yousafzai","incorrect_answers":["Lawrence Bragg","Werner Heisenberg","Yasser Arafat"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which of the following blood component forms a plug at the site of injuries?","correct_answer":"Platelets","incorrect_answers":["Red blood cells","White blood cells","Blood plasma"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the famous Papa John&#039;s last name?","correct_answer":"Schnatter","incorrect_answers":["Chowder","Williams","ANDERSON"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?","correct_answer":"Swiss Air","incorrect_answers":["Air France","British Airways","TWA"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who invented the first ever chocolate bar, in 1847?","correct_answer":"Joseph Fry","incorrect_answers":["Andrew Johnson","John Cadbury","John Tyler"]}])
  let[quest,Setquest]=useState(0);
  let[score,setscore]=useState(0);
  let[sec,setsec]=useState(59);
  let[min,setmin]=useState(1);
  let[result,setresult]=useState(false)
  let[home,sethome]=useState(true)

  data[quest].options=[...data[quest].incorrect_answers,data[quest].correct_answer];
  let next=()=>{ quest+1<data.length?Setquest(quest+1):Setquest(quest)};
  let back=()=>{ quest==0?Setquest(quest):Setquest(quest-1)};
  let check=(value)=>{
    value==data[quest].correct_answer?setscore(score+1):setscore(score);
}
  let submit=()=>{
    setresult(true)
  };
  let showquiz=()=>{ 
    sethome(false);
  }
  let timer;
  useEffect(()=>{ 
    timer=setInterval(() => {
      setsec(sec-1);
      if(sec==0&&min==0){ 
        alert("time is up")
        submit();
      }
      if(sec===0){
        setmin(min-1);
        setsec(59);}
    },1000);
    return()=>clearInterval(timer);
  })
    return (
    <div>
      <Grid>{home==true?<Grid>
        <Box className="bo">
          <img src={Download} alt="#" height="125px" style={{paddingLeft:"43px"}}/>
          <Typography variant="p"style={{paddingLeft:"60px",fontFamily:"'Georgia', Times, serif" ,fontWeight:"bold", color:"rgb(247, 243, 243)"}} >Free Quiz For Everyone </Typography>
          <img  alt="#" src={Capture} height="165px" id="image"/>
          <Button id="button" onClick={showquiz} >Play</Button>   
          <Button id="login">Log in</Button>
          <Button id="signup">Sign up</Button>
        </Box>
      </Grid>:
        <Grid>
          {result==true?<Grid><Box className="result">
              <Typography id="text" variant="h4">Result</Typography>
              <Typography id="percent" variant="h5">You scored {score/data.length*100}%</Typography><br/>
              <Typography variant="p" className="resultdetails">Your total score = {score}</Typography><br/>
              <Typography variant="p"className="resultdetails">Total Attemted Questions = {quest+1}</Typography><br/>
              <Typography variant="p"className="resultdetails"> Right Questions = {score}</Typography><br/>
              <Typography variant="p" className="resultdetails"> Wrong Questions = {data.length-score}</Typography>
              </Box></Grid>:<Box>
            <Grid>
                <Box className="freequiz">
                    <Typography variant="h4" style={{fontFamily:"'Georgia', Times, serif",fontWeight:"bold"}}>Free Quiz Mode</Typography>
                </Box>
            </Grid>
            <Grid>
                <Box className="quizbox">
                    <br/>
                    <Typography variant="h6" id="number">Question No - {quest+1}/{data.length}</Typography><br/>
                    <Typography variant="p" id="question">{quest+1}) {data[quest].question}</Typography><br/>
                    {data[quest].options.map((e,i)=>(<Box className="box"><label for={i} className="options" ><input type="radio"  onClick={()=>{check(e)}} id={i} name="rad" />{e}</label></Box>))}
                    <br/>
                    <Button variant="contained" color="success" startIcon={<ArrowBackIosIcon/>} id="back" onClick={back}>Back</Button>
                    <Button variant="contained"  color="success"  id="next" onClick={next} startIcon={<NavigateNextIcon/>}>Next</Button >
                    <Button variant="contained" color="error" id="submit" onClick={submit} className="Buttons">Submit</Button>
                <Box className="timer">
                <TimerIcon/><Typography variant="h6">{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</Typography>
                </Box>
                </Box>
            </Grid></Box>}
        </Grid>}</Grid>
    </div>
  )
}
