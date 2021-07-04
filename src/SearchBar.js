import React from 'react';
import SelectCity from './SelectCity.js';
import SelectCategory from './SelectCategory.js';
import SearchBox from './SearchBox.js';
function SearchBar(props)
{
    return(
   <div  className ="search_bar_container">
      <div>
   <SelectCity changeCity ={(wr)=>{props.changeCity(wr)}}/>
      </div>
      <div>
     <SelectCategory/>
      </div>
      <div>
  <SearchBox/>
      </div>
    

   </div>
    );

}
export default SearchBar;