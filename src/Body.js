import { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import Transaction from './Transaction';


function Body(props) {

  const [eth, setEth] = useState(0);
  // const [receiver, setReceiver] = useState(''); //adding it in app.js to make it accessible to all components
  const [txn, setTxn] = useState('0x0');
  const [cardLoad, setCardLoad] = useState(false);
  const [btnflag, setBtnflag] = useState(false);

  const handleChange = (event) => {
    props.setReceiver(event.target.value);
  }
  const amountChange = (event) => {
    setEth(event.target.value);
  }

  const handleCardLoad = (x) => {
    setCardLoad(x);
  }

  const sendeth = async () => {

    setCardLoad(true);
    setBtnflag(true);

    console.log('sendeth');

    // const web3 = new Web3(window.ethereum);
    const web3 = props.web3;

    console.log(props.address);
    console.log(props.receiver);

    await web3.eth.sendTransaction({
      from: props.address,
      to: props.receiver,
      value: web3.utils.toWei(eth, 'ether'),
      gas: '1000000',
    },
      (err, txnhash) => {
        if (err) {
          console.log(err);
          setTxn(err.message);
        } else {
          console.log(txnhash);
          setTxn(txnhash);
          props.doneChange(true);
        }
      }
    )
    .then((result) => {
      console.log(result);
      props.setLoad(true);
      setBtnflag(false);
    })
    .catch((err) => {
      console.log(err);
      setBtnflag(false);
    });

  }

  return (
    <div>

    {
      cardLoad ?
      <Transaction eth={eth} receiver={props.receiver} address={props.address} txn={txn} handleCardLoad={handleCardLoad} doneChange={props.doneChange} btnflag={btnflag}/>
      :
    
    <div className="container py-1" id='container'>
      <div className="cardhead my-2">
        <div className="cardicon"><FaEthereum /></div>
        <div className="cardtitle"><h6>Ethereum</h6></div>
      </div>
      
      <div className="cardbody pt-3">
        <div className="h4 text-center"><input type="number" onChange={amountChange} style={{ width: "70px" }} className="input amaountInput" placeholder='0 ETH' /></div>

        <div className="d-flex receiver my-1">Receiver : <input className='input' style={{ width: "300px" }} value={props.receiver} onChange={handleChange} type="text" /></div>
        
        {props.address ? <div className="d-flex sender my-1">Sender : <div className="fw-bold ms-1">{props.address}</div></div>
          : ''}

      </div>

      <div className="cardfooter text-center mb-2 mt-4">

        {props.address ?         <button className='sendBtn btn btn-small rounded-pill' onClick={sendeth}>send</button> : 
                <button className='sendBtn btn btn-small rounded-pill disabled' onClick={sendeth}>send</button> 
              }
        
        <small className="text-muted my-2">Transaction Hash - {txn}</small>
      </div>
    </div>
    }

    </div>
  )
  
}

export default Body;
