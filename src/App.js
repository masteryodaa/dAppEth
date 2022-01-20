import Connector from "./Connector";
import Body from "./Body";
import Footer from "./Footer";
import DoneTransaction from "./DoneTransaction";
import { useState } from 'react';


function App() {

  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);
  const [done, setDone] = useState(false);
  const [load, setLoad] = useState(false);
  const [warning, setWarning] = useState(null);


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

  const handleWarning = (warning) => {
    setWarning(warning);
  }

  return (
    <div className="app">

      <Connector address={addressState} setWeb3State={setWeb3State} setWarning={handleWarning} />

      {done ? <DoneTransaction load={load} /> : ''}

      {warning != null ? <h2 className="text-dark text-center">{warning}</h2> :
        <Body address={address} web3={web3} doneChange={doneChange} setLoad={setLoadHandle} />
      }

      <Footer />
    </div>
  );
}

export default App;
