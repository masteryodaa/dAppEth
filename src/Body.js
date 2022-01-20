import { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import Transaction from './Transaction';


function Body(props) {

  const [eth, setEth] = useState(0);
  const [receiver, setReceiver] = useState('');
  const [txn, setTxn] = useState('0x0');
  const [cardLoad, setCardLoad] = useState(false);

  const handleChange = (event) => {
    setReceiver(event.target.value);
  }
  const amountChange = (event) => {
    setEth(event.target.value);
  }

  const handleCardLoad = (x) => {
    setCardLoad(x);
  }

  const sendeth = async () => {

    setCardLoad(true);

    console.log('sendeth');

    // const web3 = new Web3(window.ethereum);
    const web3 = props.web3;

    console.log(props.address);
    console.log(receiver);

    await web3.eth.sendTransaction({
      from: props.address,
      to: receiver,
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
    })
    .catch((err) => {
      console.log(err);
    });

  }

  return (
    <div>

    {
      cardLoad ?
      <Transaction eth={eth} receiver={receiver} address={props.address} txn={txn} handleCardLoad={handleCardLoad} doneChange={props.doneChange}/>
      :
    
    <div className="container py-1" id='container'>
      <div className="cardhead my-2">
        <div className="cardicon"><FaEthereum /></div>
        <div className="cardtitle"><h6>Ethereum</h6></div>
      </div>
      
      {/* <div className="container text-center">
<img  src={loadgif} alt="Loading" width="50" height="50" className='my-2' />
  </div> */}

      <div className="cardbody pt-3">
        <div className="h4 text-center"><input type="number" onChange={amountChange} style={{ width: "70px" }} className="input amaountInput" placeholder='0 ETH' /></div>

        <div className="d-flex receiver my-1">Receiver : <input className='input' onChange={handleChange} type="text" /></div>
        
        {props.address ? <div className="d-flex sender my-1">Sender : <div className="fw-bold ms-1">{props.address}</div></div>
          : ''}

      </div>

      <div className="cardfooter text-center mb-2 mt-4">

        <button className='sendBtn btn btn-small rounded-pill' onClick={sendeth}>send</button> 
        
        <small className="text-muted my-2">Transaction Hash - {txn}</small>
      </div>
    </div>
    }

    </div>
  )
  
}

export default Body;
