import React from 'react';
import { Grid ,makeStyles ,Paper } from '@material-ui/core';
import SearchBar from './SearchBar';
import OutputTable from './OutputTable';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'green',
   
     
    // color: theme.palette.text.secondary,
  },
}));

function RightBar(props) {
 const classes = useStyles();
  return (
      <>
      <Grid className="right_searchBar" item xs={12}>
         
          <SearchBar changeCity ={(wr)=>{props.changeCity(wr)}} 
          changeCategory ={(ca) => props.changeCategory(ca)}
           changeSearchWord ={(sw) =>props.changeSearchWord(sw)}
           categorydata ={props.categorydata} 
           finalData ={props.finalData}
           
           />
        </Grid>
        <Grid className="right_Output" item xs={12}>
          <OutputTable finalTempData ={props.finalTempData}/>
        </Grid>
        
      </>

  );




}
export default RightBar ;