//import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect,useSetState} from 'react';
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
  const  [myTempOptions , setMyTempOptions] = useState([]);
  
 
  const searchBasedOnCity =() =>
  {   fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city1}`)
  .then((response) => response.json())
       .then((res) => {
       // console.log(res);
        setMyOptions(res);
        setMyTempOptions(res);
       console.log("amit");
   
 
 })
  };
  const  searchBasedOnSearchWord = () =>{
    
    var arr =[];
    if(searchWord=== null)
    setMyTempOptions(myOptions);
  else  if(category !='' && searchWord != '' )
   { myOptions.forEach((element)=>{
    
      if(element[category] === searchWord)
     { arr.push(element);
      console.log(`${element[category]} === ${searchWord}`)
    }
    })
    setMyTempOptions(arr);
  }

  }

useEffect(() => {
  searchBasedOnCity();
  setCategory('');
},[city1]);

useEffect(
  () => {
  searchBasedOnSearchWord();
 

},[searchWord]);

 const setCityUtil =(ci) =>{
   setCity(ci);
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
    <RightBar changeCity ={(ci) => setCityUtil(ci) }
    
         changeCategory ={(ca) => setCategory(ca)
         } 
         changeSearchWord ={(sw) =>{ setSearchWord(sw) 
          console.log(`App +${sw}`);
         }
            
            } 
      finalData ={myOptions}  finalTempData ={myTempOptions} categorydata ={category}
    />
   </Grid>
    
 </Grid>
 </div>
   </>
  );
}

export default App;
