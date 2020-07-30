// product
import React from 'react'

export default function Product(props) {
    return (
        <div>
{/* 
NO. xxxxx
Name: Green Box
Need forklift truck: no */}
                     <div style={{backgroundColor:'gray',width:'800px',margin:'auto'}}> 
                        <h2>NO.:{props.no}</h2>
                        <h2>Name:{props.name}</h2> 
                        <h2>Need forklift truck:{props.forkliftTruck==true?'yse':'no' }</h2> 
                     <button className='btn btn-danger' onClick={()=>{
                         if(props.forkliftTruck==true&&props.ForkliftTruckLicense){
                         props.deleteProducts(props.index)
                     props.setFlag()
                   props.funcIncreaseNumProduct(props.wrkerindex)}
                   else if(props.forkliftTruck==false) {
                    props.deleteProducts(props.index)
                    props.setFlag()
                  props.funcIncreaseNumProduct(props.wrkerindex)

                   }
                   else{alert('ned track')}
                }
                    } style={{color:'red'} }>delete</button> 
                     
                 </div> 
            {/* prrooo */}
        </div>
    )
}
