import React from 'react';
import icon from "./donepng.png";
import loadgif from './load.gif';


function DoneTransaction(props) {
  
  return(
  <div>
     { props.load ?
    
    <div className='container text-center'>
      <h6>Transaction Successful ! </h6>
      <img src={icon} alt="Done" width="100px" height="100px" />
  </div> :
  <div className="container text-center">
    <small>Transferring your funds...</small>
<img  src={loadgif} alt="Loading" width="40" height="40" className='my-2' />
  </div>
   }
  </div>

  )}

export default DoneTransaction;
