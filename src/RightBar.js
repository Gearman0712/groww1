import React from 'react';
import { Grid ,makeStyles ,Paper } from '@material-ui/core';
import SearchBar from './SearchBar';
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

function RightBar() {
 const classes = useStyles();
  return (
      <>
      <Grid className="right_searchBar" item xs={12}>
         
          <SearchBar/>
        </Grid>
        <Grid className="right_Output" item xs={12}>
         <h1> Output </h1>
        </Grid>
        
      </>

  );




}
export default RightBar ;