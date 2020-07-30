import React, { useState, useEffect } from 'react'
import Product from './Product'
import {Link} from 'react-router-dom';
let dir='login'

// let WorkerExesist=false
let nameWorker=''
let num=0
export default function Login(props) {
    const[No,setNo]=useState('')
    const [flag, setFlag] = useState(false)
    // const [WorkerExesist, setWorkerExesist] = useState(false)
    // const validate=()=>{ 
        
        // props.Workers.forEach(element => {
            //     if(element.no==No){setWorkerExesist(true)}
            //     nameWorker=element.fullName
            // });  
            
            
            
            const DisplayAndHide=()=>{
                
                
                
                    // alert('no usert')
                    if(props.Authentication==true)
                    
          {  
              return (
                  
                  // Details:
                  // Full Name: XXX XXX
                  // NO.: XXXXX
                  // Forklift truck license: yes/no
                  // List of products
                  <div style={{}}>
          <h1>Details:</h1>
          <h1>Full Name {props.Workers[props.wrkerindex].fullName}</h1>
          <h1>NO. : {props.Workers[props.wrkerindex].no}</h1>
          <h1>Forklift truck license: {props.Workers[props.wrkerindex].ForkliftTruckLicense==true?'yse':'No'}</h1>
          {props.ListOfProducts.map((item,i)=>{
              return <Product key={i} no={item.no} name={item.name} ForkliftTruckLicense={props.Workers[props.wrkerindex].ForkliftTruckLicense} forkliftTruck={item.forkliftTruck} index={i} deleteProducts={props.deleteProducts} funcIncreaseNumProduct={props.funcIncreaseNumProduct} wrkerindex={props.wrkerindex}  setFlag={()=>setFlag(false)} />
            })}
              {/* setNo(000) */}
      <button className='btn btn-primary' onClick={() => {props.funAuthentication(125)
    setFlag(false)}}>Log Out</button>
          </div>
          )}
          
          
          
          
          else {
               
              
            return(
              // Workers
              //login ########
              <div>  <br/> <br/>
     <div className='container col-4' style={{ backgroundColor:'gray' }}>  <br/>      
     <h2>Login</h2>  
        <input  onChange={(e)=>{setNo(+e.target.value)
        if(e.target.value==99){dir='manager'
    }else{dir='login'}
        }} className='form-control' type='number' placeholder='No '></input>
        <br/> <br/>
   <Link to={'/'+dir}> <button className='btn btn-primary' onClick={() =>{ 

 
            // validate()
            //   props.setflag()
            props.funAuthentication(No)
            // props.funcVisitCounter(num)
            //   
            
            // console.log('the index is= ' +props.Workers[props.wrkerindex].fullName);
            // console.log(No);
            setFlag(true)
        }
    }>Enter</button></Link>
   
    <br/> <br/> </div></div>)} 
       
       //End login ############
       
       
    }
    
    
    useEffect(() => {
           if(props.Authentication==false)
               return;
        
           if(props.Authentication==true&&flag){
           
                   props.funcVisitCounter(props.wrkerindex)
      
           
            //  console.log(props.wrkerindex);
            
            
                   }
    }, [props.setflag])
    return (
        <div  >
            {console.log('loge renderd')}
             {DisplayAndHide()}
    </div>
    )
}
