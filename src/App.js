import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link,Switch, Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Hoom';
import Signup from './components/Signup';
import Login from './components/Login';
import Manager from './components/Manager';
// import Product from './components/product';

function App() {
  //   1 .11122 , קופסא ירוקה , אינו צריך מלגזה.
  // 2 .22554 , קופסא ירוקה , אינו צריך מלגזה.
  // 3 .66698 , קופסא כחולה , צריך מלגזה.
  // 4 .78544 , קופסא אדומה , אינו צריך מלגזה.
  // 5 .69875 , קופסא אדומה , אינו צריך מלגזה.
  
  // NO. xxxxx
  // Name: Green Box
  // Need forklift truck: no
  const[flag,setflag]=useState(false)
  // const[flag,setflag]=useState(false)
  // let wrkerindex=0
  const [wrkerindex, setwrkerindex] = useState(0)
  const [ListOfProducts,setListOfProducts] = useState([
    {no:11122,name:'GreenBox',forkliftTruck:false},
  {no:22554,name:'GreenBox',forkliftTruck:false},
  {no:66698,name:'BlueBox',forkliftTruck:true},
  {no:78544,name:'RedBox',forkliftTruck:false},
  {no:69875,name:'RedBox',forkliftTruck:false},
])



// 1 .מחלקת עובד:
// מאפייני העובד:
// 1 .מספר עובד )חד-חד ערכי(. מספר בעל 5 ספרות.
// 2 .שם מלא.
// 3 .רישיון למלגזה . ערך בוליאני.
// 4 .כמה פעמים ביקר במחסן.

// Details:
// Full Name: XXX XXX
// NO.: XXXXX
// Forklift truck license: yes/no

   const [Workers, setWorkers] = useState([{fullName:'anas',no:12345,ForkliftTruckLicense:true,visitCounter:0,numberOfProducts:0},{fullName:'omae',no:123,ForkliftTruckLicense:true,visitCounter:0,numberOfProducts:0}])
const [Authentication, setAuthentication] = useState(false)



 const AddWorker=(name,No,License,visit)=>{
  setWorkers( [{fullName:name,no:No,ForkliftTruckLicense:License,visitCounter:visit,numberOfProducts:0} ,...Workers])
}
  
 
 



const deleteProducts=(i)=>{
let temp=ListOfProducts.filter((element,index)=>(index!=i))

setListOfProducts(temp)

}

const funAuthentication=(workerNO)=>{

  //  let ObjWithWorker= Workers.find( ({no}) => no  == workerNO)
        
  //              if(ObjWithWorker)
  //              {setAuthentication(true)
              
  //                    }
  //              else{setAuthentication(false)}
   

  for (let index = 0; index < Workers.length; index++) {
    if(Workers[index].no==workerNO){
      
      setAuthentication(true)
      setwrkerindex(index)
      break;
    } else{setAuthentication(false)}
    
  }

              

   



  
}
  
  const FuncSignIn =()=>{
    setwrkerindex(0)
    setAuthentication(true)
  }
 
    const funcVisitCounter=(i)=>{

      // Workers[inex].visitCounter= Workers[inex].visitCounter+1
    let tempo2=Workers
// console.log(tempo2[i]);
    tempo2[i].visitCounter=tempo2[i].visitCounter+1
     setWorkers(tempo2)
    }  
   const funcIncreaseNumProduct=(i)=>{
    let tempo2=Workers
    tempo2[i].numberOfProducts=tempo2[i].numberOfProducts+1
    setWorkers(tempo2)
   }

// useEffect(() => {
  
//     setAuthentication(tempo)
//   },[Workers] )

return (
    <div className="App">

      <Router>
      <Switch>
      <Route exact path='/' component={()=>{return <Home/>}}/>
      <Route exact path='/signup' component={()=>{return <Signup AddWorker={AddWorker} funAuthentication={funAuthentication} Workerslength={Workers} FuncSignIn={FuncSignIn}/> }}/>
      <Route exact path='/login' render={()=>{return <Login Workers={Workers} ListOfProducts={ListOfProducts} deleteProducts={deleteProducts} funAuthentication={funAuthentication} Authentication={Authentication}  wrkerindex={wrkerindex} funcVisitCounter={funcVisitCounter} funcIncreaseNumProduct={funcIncreaseNumProduct} setflag={ ()=>setflag(!flag)} /> }}/>
      <Route exact path='/manager' component={()=>{return <Manager Workers={Workers} ListOfProducts={ListOfProducts}  /> }}/>
 
      </Switch>
      <Link to='/'> Home </Link>
      <Link to='/signup'> signup </Link>
      <Link to='/login'> login </Link>
      <Link to='/manager'> manager </Link>
      <button className='btn btn-primary' onClick={() => {funAuthentication()}}>primaryBtn</button>
      </Router>
  
    </div>
  );
}

export default App;
// npm install react-router-dom