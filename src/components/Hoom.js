
import React from 'react'
import {Link} from 'react-router-dom';

export default function Hoom() {
    return (
        <div  >
            <br/>
            <br/>
              <div className='container col-4' style={{ backgroundColor:'gray' }}>
                  <br/>
         <h2>Logistics Management</h2>  
<br/> <br/>
{/* <Link to='/'>  </Link> */}

<Link to='/signup' className='btn btn-primary' onClick={() => {}}>Sign up</Link>
<br/>
<br/>
<Link to='/login' className='btn btn-primary' onClick={() => {}}>Log in</Link>
         <br/>
         <br/>
            </div>
        </div>
    )
}
