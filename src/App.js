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

// const SearchB =(city, category,searchWord) =>{

    
//   if(searchWord &&( searchWord.length >0))



// }




function App() {

  const  [city1, setCity] = useState('MUMBAI');
  const  [category, setCategory] = useState('');
  const  [searchWord, setSearchWord] = useState('');
  const  [myOptions , setMyOptions] = useState([]);

  const searchBasedOnCity =() =>
  {   fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city1}`)
  .then((response) => response.json())
       .then((res) => {
        console.log(res);
      //   var arr=[];
      //  for (var i = 0; i < res.length; i++) {
      //   console.log(`${res[i].city } barman ${city1}`)
      //      if(res[i].city == {city1})
      //        { console.log("hum");
      //          arr.push(res[i]);
      //         }
          
      //  }
      
       console.log("amit");
    setMyOptions(res);
     
 
 })
  };
 
  

const setCityUtil =(ci) =>{
  console.log(`${ci} kumar ${city1}`)
  if(ci!=city1)
  {setCity(ci);
    searchBasedOnCity();
  }
}



   console.log(city1);
   console.log(category);
   console.log(searchWord);

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
    <RightBar changeCity ={(ci) => setCityUtil(ci)}     changeCategory ={(ca) => setCategory(ca)} changeSearchWord ={(sw) => setSearchWord(sw)} 
      finalData ={myOptions}
    />
   </Grid>
    
 </Grid>
 </div>
   </>
  );
}

export default App;
