import React, { useState,useEffect } from 'react'


 
  export default function SearchBox1(props) {
    const [value1, setValue1] = useState();  
    const [inputValue, setInputValue] = useState('');  
    //var cat = props.categorydata;
  useEffect(() => {
      setInputValue('');
      
  }, [props.categorydata])


 const finalChange = (value) =>{

 props.changeSearchWord(value);

 }
 const handleChange = (event,newInputValue) => {
   
  
 
  
  setInputValue(event.target.value);
  finalChange(event.target.value);
  console.log('tata')
  console.log(event.target.value)
  
};
  
    return (
       <>
        <form >
        <label id ="inp">
   
          <input type="text" id="ip2" value={inputValue} onChange={handleChange} />
        </label>
      
      </form>




      </>
    );
  };
  


