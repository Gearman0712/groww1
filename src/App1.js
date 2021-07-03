//import logo from './logo.svg';
import './App1.css';
import React from 'react';
import { Grid ,makeStyles ,Paper } from '@material-ui/core';
import SideBar from './SideBar';
import RightBar1 from './RightBar1';

function App1() {

  return (
  <>
   <div className ="main">
   < div className ="itemlevel1 top1">
   <h1>Groww </h1>
   </div>
   < div className ="itemlevel1">
    <div className ="itemlevel2 side">
     <SideBar/>
    </div>
    <div  className ="itemlevel2 left">
      <RightBar1/>

      
    </div>
   </div>
   </div>



  </>
  )


}


export default App1;
