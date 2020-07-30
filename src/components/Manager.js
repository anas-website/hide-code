import React from 'react'

export default function Manager(props) {
    return (
        <div>
{/* Manager */}

          {/* NO FullName Counter  
  Number of
products


*/}
          <table className='table table-bordered'>
            <thead>
              <tr>
               
                <th scope='col'>NO</th>
                <th scope='col'>FullName</th>
                <th scope='col'>Counter </th>
                <th scope='col'> Number of products
 </th>
              </tr>
            </thead>
            <tbody>
           
           {
            props.Workers.map((item,i)=>{
                  return   <tr>
             {/* fullName:'anas',no:12345,ForkliftTruckLicense:true,visitCounter:0,numberOfProducts:0 */}
                <td>{item.no}</td>
                <td>{item.fullName}</td>
                <td>{item.visitCounter}</td>
                <td>{item.numberOfProducts}</td>
              </tr>
                })
           
              
              
              }
             
           
            </tbody>
          </table>
          
          manager  
        </div>
    )
}
