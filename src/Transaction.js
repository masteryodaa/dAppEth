import { FaEthereum } from 'react-icons/fa';


function Transaction(props) {

    const clickHandler = () => {
        props.handleCardLoad(false);
        props.doneChange(false);
        // props.setBtnFlaf(false);

    }

    

    return (
        <div className="container py-1 mt-5" id='container'>
            <div className="cardhead my-2">
                <div className="cardicon"><FaEthereum /></div>
                <div className="cardtitle"><h6>Ethereum</h6></div>
            </div>

            <div className="cardbody pt-3">

                <div className="h4 text-center">{props.eth + " ETH"}</div>

                <div className="d-flex receiver my-1">Receiver : <div className="fw-bold ms-1">{props.receiver}</div></div>

                <div className="d-flex sender my-1">Sender : <div className="fw-bold ms-1">{props.address}</div></div>


            </div>

            <div className="cardfooter text-center mb-2 mt-4">

                {
                    props.btnflag ? <button className="btn btn-small rounded-pill disabled" onClick={clickHandler}>Sending</button> : 
                
                <button className='btn btn-small rounded-pill' onClick={clickHandler}>New Transaction</button> }

                <small className="text-muted my-2">Transaction Hash - {props.txn}</small>
            </div>
        </div>
    )
}

export default Transaction;
