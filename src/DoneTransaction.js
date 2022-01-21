import React from 'react';
import icon from "./donepng.png";
import loadgif from './load.gif';

// import {MdDoneOutline} from 'react-icons/md';



function DoneTransaction(props) {

  return(
  <div>
     { props.load ?
    
    <div className='d-flex justify-content-center align-items-center'>
      <h6>Transaction Successful ! </h6>
      <img src={icon} className='ms-3' alt="Done" width="50px" height="50px" />
      {/* <MdDoneOutline className="doneicon ms-3" size="50px" /> */}
  </div> :
  <div className="container text-center">
    <small>Transferring your funds...</small>
<img  src={loadgif} alt="Loading" width="40" height="40" className='my-2' />
  </div>
   }
  </div>

  )}

export default DoneTransaction;
