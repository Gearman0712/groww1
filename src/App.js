//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Grid ,makeStyles ,Paper } from '@material-ui/core';
import SideBar from './SideBar';
import RightBar from './RightBar';
import TopBar from './TopBar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
   <>
   <div className = "main">
   <Grid container spacing={2}>

   <Grid item xs={12}>
     <div className ="top_bar">
     <TopBar/>
     </div>
     
   </Grid>

   <Grid className ="side" item xs={2}>
    <SideBar/>
   </Grid>

   <Grid className="right" item xs={10}>
    <RightBar/>
   </Grid>
   
 </Grid>
 </div>
   </>
  );
}

export default App;
