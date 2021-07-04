import React ,{useState,useEffect} from 'react';
 import Main_data from './Main_data';
 
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
function OutputTable(props)
{   
  const [bankList ,setBankList] =useState([]);
   
    useEffect(() =>{
        setBankList(props.finalTempData);
 
    },[props.finalTempData])

    const columns =[
        {dataField: 'bank_name' , text: 'bank_name' ,sort:true},
        {dataField: 'city' , text:'city',sort:true},
        {dataField: 'branch' ,text:'branch',sort:true},
        {dataField: 'ifsc' ,text:'ifsc',sort:true},

    ]
    const pagination = paginationFactory(
        { page:1,
         sizePerPage :5,
         lastPageText:'>>',
         firstPageText:'<<',
         nextPageText:'>',
         prePageText:'<',
         showTotal:true,
         alwaysShowAllBtns: true,
         onPageChange: function(page ,sizePerPage)
         { console.log('page' ,page);
         console.log('sizePerpage' ,sizePerPage);
         },

         onSizePerPageChange : function(page,sizePerPage){
            console.log('page' ,page);
            console.log('sizePerpage' ,sizePerPage);
         }

        }
    )
   



    return (
  <> 
  <BootstrapTable
   bootstrap4 
   keyField ='ifsc' 
   columns ={columns} 
   data ={bankList} 
    pagination ={pagination}
   />
  
  
{/* <table>
<tr>
    <th>bank_name</th>
    <th>city</th>
    <th>branch</th>
    <th>ifsc</th>
</tr>
{
    bankList && bankList.length >0 ?
    bankList.map (usr => 
    <tr> <td>{usr.bank_name}</td>
    
    <td>{usr.city}</td>
    <td>{usr.branch}</td>
    <td>{usr.ifsc}</td>

    </tr>
    )
    : 'Loading'
} 

  </table>
    
*/}
  </>
    )

}

export default OutputTable;