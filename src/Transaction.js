import { FaEthereum } from 'react-icons/fa';



function Transaction(props) {

    const clickHandler = () => {
        props.handleCardLoad(false);
        props.doneChange(false);


    }

    

    return (
        <div className="container py-1" id='container'>
            <div className="cardhead my-2">
                <div className="cardicon"><FaEthereum /></div>
                <div className="cardtitle"><h6>Ethereum</h6></div>
            </div>

            <div className="cardbody pt-3">

                <div className="h4 text-center">{props.eth}</div>

                <div className="d-flex receiver my-1">Receiver : {props.receiver}</div>

                <div className="d-flex sender my-1">Sender : <div className="fw-bold ms-1">{props.address}</div></div>


            </div>

            <div className="cardfooter text-center mb-2 mt-4">

                <button className='btn btn-small rounded-pill' onClick={clickHandler}>New Transaction</button>

                <small className="text-muted my-2">Transaction Hash - {props.txn}</small>
            </div>
        </div>
    )
}

export default Transaction;
