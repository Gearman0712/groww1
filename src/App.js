//import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
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

// const MainSearchFunction =(city, category,searchWord) =>{

    
//   if(searchWord &&( searchWord.length >0))



// }




function App() {
  const  [city, setCity] = useState('MUMBAI');
  const  [category, setCategory] = useState('');
  const  [searchWord, setsearchWord] = useState('');

   console.log(city);

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

   <Grid className="right"  item xs={10}>
    <RightBar changeCity ={(ci) => setCity(ci)}/>
   </Grid>
   
 </Grid>
 </div>
   </>
  );
}

export default App;
