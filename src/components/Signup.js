import React, { useState } from 'react'
import {Link} from 'react-router-dom';
// let direct='signup'
export default function Signup(props) {
    const[NO,setNO]=useState('')
    const[FullName,setFullName]=useState('')
    const[truk,settruk]=useState('non')
 
const [direct, setdirect] = useState('signup')


// const radioBtn=(e)=>{
    
     
//     if(e=='yse'){settrukYse('yse') 
//      }else settrukYse('no')
     
    
// }
// {fullName:name,no:No,ForkliftTruckLicense:License,visitCounter:visit}


    return (
        <div  > <br/>   <br/>
       
          <div className='container col-4' style={{ backgroundColor:'gray' }}>
              <br/>
     <h2>Sign up</h2>  
<br/> <br/>
 
<br/>
<br/>
{/* direct=signup */}
        <input onChange={(e)=>{setNO(+e.target.value)
        
        if (!(e.target.value>='1'&&e.target.value<='9') ) e.target.value=''
        }} className='form-control' type='text' placeholder='NO ' maxLength='5' ></input>
        <br/><br/>
         
              <input onChange={(e)=>{setFullName(e.target.value) 
                }} className='form-control' type='text' placeholder='Full Name' maxLength='5'></input>
              <br/> 
              <h6>Forklift truck</h6>
              
              <h4>Yse</h4> 
 <input  onChange={(e)=>{ settruk(true)
 setdirect('login')}} className='radio' type='radio' name='group1'></input> 


 <h4>No</h4> 
 <input   onChange={(e)=>{settruk(false)
    setdirect('login')}}  className='radio' type='radio' name='group1'></input>
 <br/>  <br/>
 {/* const AddWorker=(name,No,License,visit) */}
 {/* <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)}/> */}
<Link to={'/'+direct}> 

   <button className='btn btn-primary' onClick={() => { if(truk!='non'){ props.AddWorker(FullName,NO,truk,1)
   props.FuncSignIn()}
//    props.funAuthentication(props.Workerslength[props.Workerslength.length-1].no)}
else{alert('chose track')}}}>Create</button> </Link>
     <br/>
     <br/>
  
        </div>
    </div>
    )
}
