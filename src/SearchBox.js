import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab'
import Data from './Data'
 
  export default function SearchBox(props) {
    const [value1, setValue1] = useState('');     
//   const [myOptions, setMyOptions] = useState([]) ;
//   const [optional, setMyOptional] = useState([]) ;
//   const getDataFromAPI = () => {
//       console.log("Options Fetched from API")
    
    //   fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').then((response) => {
    //     return response.json();
    //   }).then((res) => {
       
    //     for (var i = 0; i < res.length; i++) {
    //         //console.log(`this i ifsc ${res[i].ifsc}`);
    //        myOptions.push(res[i].ifsc);
           
    //     }
    //     console.log("Amit");
        
    //     setMyOptions(myOptions)
    //     console.log(myOptions);
    //   })
    // }
    
    // //getDataFromAPI();
     
 //console.log(Data);
 const finalChange = (value) =>{

 props.changeSearchWord(value);

 }
 const handleChange = (event ,val) => {
  setValue1(val);
  finalChange(value1);
};
  
    return (
        
      <Autocomplete
        id="combo-box-demo"
        value ={value1}
        onChange={(event,value) => handleChange(event,value)}
        options={Data}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params}  label="Combo box" variant="outlined" />}
      />
    );
  };
  


