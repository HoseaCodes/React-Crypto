import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ElectionABI from '../../abis/Election.json'

function Voting() {
    const [currentaccount, setCurrentAccount] = useState('')
    const [loading, setLoading] = useState(false)
    const [election, setElection] = useState()
    const [canidate1, setCanidate1] = useState()
    const [canidate2, setCanidate2] = useState()
    const [Canidate, setCanidate] = useState()

    useEffect(() => {
        loadWeb3();
        loadblockchaindata();
    }, [])

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };


    const loadblockchaindata = async () => {
        setLoading(true)
        const web3 = window.web3

        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]
        setCurrentAccount(account)


        const networkId = await web3.eth.net.getId();

        const networkData = await ElectionABI.networks[networkId];

        if (networkData) {
            const election = new web3.eth.Contract(ElectionABI.abi, networkData.address);
            const canidate1 = await election.methods.candidates(1).call()
            const canidate2 = await election.methods.candidates(2).call()
            console.log(canidate1)
            setCanidate1(canidate1)
            setCanidate2(canidate2)
            setElection(election)
            setLoading(false)
        } else {
            window.alert('The smart contract is not deployed current network')
        }
    }

    const votecanidate = async (canidateid) => {
        setLoading(true)
        await election.methods.vote(canidateid).send({ from: currentaccount }).on('tranactionhash', () => {
            console.log('successful')
        })
        setLoading(false)
    }

    const onchange = (e) => {
        setCanidate(e.target.value);
        console.log(e.target.value);
    };

    const onsubmit = (e) => {
        e.preventDefault();
        if (Canidate.id !== 0) votecanidate(Number(Canidate));
        else window.alert("there is error in submission");
    };
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="App">
            <div className="mt-4 text-center" style={{ color: "#000000" }}>
                <h2>Election Results</h2>
                <hr
                    style={{
                        width: "70%",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderColor: "#000000",
                    }}
                />
                <div className="p-3 ml-auto mr-auto" style={{ width: "40%" }}>
                    <div className="row ml-auto mr-auto  mb-2" style={{ width: "90%" }}>
                        <div className="col">
                            <p>#</p>
                        </div>
                        <div className="col">
                            <p>Name</p>
                        </div>
                        <div className="col">
                            <p>Votes</p>
                        </div>
                    </div>
                    <hr
                        style={{ width: "90%", borderStyle: "solid", borderColor: "#000000" }}
                    />
                    <div
                        className="row ml-auto mr-auto mt-2  mb-2"
                        style={{ width: "90%" }}
                    >
                        <div className="col">
                            <p>{canidate1.id}</p>
                        </div>
                        <div className="col">
                            <p>{canidate1.name}</p>
                        </div>
                        <div className="col">
                            <p>{canidate1.voteCount}</p>
                        </div>
                    </div>
                    <hr
                        style={{ width: "90%", borderStyle: "solid", borderColor: "#000000" }}
                    />
                    <div
                        className="row ml-auto mr-auto mt-2  mb-2"
                        style={{ width: "90%" }}
                    >
                        <div className="col">
                            <p>{canidate2.id}</p>
                        </div>
                        <div className="col">
                            <p>{canidate2.name}</p>
                        </div>
                        <div className="col">
                            <p>{canidate2.voteCount}</p>
                        </div>
                    </div>
                </div>
                <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
                    <h5>Cast Your Vote:</h5>
                    <form onSubmit={onsubmit}>
                        <select name="candidate" className="form-control" onChange={onchange}>
                            <option defaultValue value="">
                                Select
            </option>
                            <option value="1">{canidate1.name}</option>
                            <option value="2">{canidate2.name}</option>
                        </select>
                        <button className="btn btn-primary mt-2 btn-md w-100">
                            Vote Candidate{""} {Canidate}
                        </button>
                    </form>
                </div>
                <p className="my-5">
                    Your address: <span className="font-weight-bold">{currentaccount}</span>
                </p>
            </div>
        </div>
    );
}

export default Voting;
