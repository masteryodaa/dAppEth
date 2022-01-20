import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import DoneTransaction from "./DoneTransaction";
import {useState} from 'react';
// const Web3 = require('./web3.min.js')


function App() {

  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);
  const [done, setDone] = useState(false);
  const [load, setLoad] = useState(false);


  const addressState = (address) => {
    setAddress(address);
  }

  const setWeb3State = (web3) => {
    setWeb3(web3);
  }

  const doneChange = (change) => {
    setDone(change);
  }

  const setLoadHandle = (load) => {
    setLoad(load);
  }

  return (
    <div className="app">

      <Header address={addressState} setWeb3State={setWeb3State}/>

      {done ? <DoneTransaction load={load} /> : ''}

      <Body address={address} web3={web3} doneChange={doneChange} setLoad={setLoadHandle}/>

      <Footer />
    </div>
  );
}

export default App;
