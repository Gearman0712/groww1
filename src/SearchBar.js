import React from 'react';
import SelectCity from './SelectCity.js';
import SelectCategory from './SelectCategory.js';
import SearchBox from './SearchBox.js';
function SearchBar(props)
{
    return(
   <div  className ="search_bar_container">
      <div>
   <SelectCity changeCity ={(wr)=>{props.changeCity(wr)}} />
      </div>
      <div>
     <SelectCategory changeCategory ={(ca) => props.changeCategory(ca)}
         categorydata = {props.categorydata}
     />
      </div>
      <div>
  <SearchBox changeSearchWord ={(sw) =>props.changeSearchWord(sw)}
      finalData ={props.finalData}
      categorydata ={props.categorydata} 
  />
      </div>
    

   </div>
    );

}
export default SearchBar;