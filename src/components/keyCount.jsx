import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Ticker from 'react-ticker';
import { GlobalState } from '../GlobalState';
import './style.css';


const Keys = () => {
    const state = useContext(GlobalState)
    console.log(state)
    const usedKeys = state.keyAPI.key[0].usage.current_day.credits_used
    const remainingdKeys = state.keyAPI.key[0].usage.current_day.credits_left
    const resetKeys = state.keyAPI.key[0].plan.credit_limit_daily_reset

    function handleShow() {
        document.getElementById('keyValue').classList.toggle("toggle")

    }

    return (
        <section className="keySection">
            <Button onClick={handleShow} variant="outline-success"> Key Info </Button>
            <div id="keyValue" className="keyGroup toggle">
                <p>API Calls Used: {usedKeys}</p>
                <p>Remaing API Calls: {remainingdKeys}</p>
                <p>When API Resets: {resetKeys}</p>
            </div>
        </section>
    )
}

export default Keys
