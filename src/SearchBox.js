import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab'
import Data from './Data'
 
  export default function SearchBox(props) {
    const [value1, setValue1] = useState();    
    var searchdata = props.finalData;
    var cat = props.categorydata;
    console.log(`${cat} dog`);

 const finalChange = (value) =>{

 props.changeSearchWord(value);

 }
 const handleChange = (event,newValue) => {
  setValue1(newValue);
  if(newValue!=null)
{  finalChange(newValue[cat]);
  console.log('tata')
  console.log(newValue[cat]);}
  else{ finalChange(null);

  }
};
  
    return (
        
      <Autocomplete
        id="combo-box-demo"
        value ={value1}
        onChange={ (event, newValue)=>{
          handleChange(event,newValue);
        } }
        options={searchdata}
        getOptionLabel={
          (option) =>{
            if(cat !='')
            return option[cat];
            
        }
                                       }
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params}  label="Combo box" variant="outlined" />}
      />
    );
  };
  


