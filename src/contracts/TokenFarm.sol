pragma solidity ^0.5.0;

import "./DaiToken.sol";
import "./PassiveToken.sol";

contract TokenFarm {
    string public name = "PattonU Token Farm";
    PassiveToken public passiveToken;
    DaiToken public daiToken;

    constructor(PassiveToken _passiveToken, DaiToken _daiToken) public {
        passiveToken = _passiveToken;
        daiToken = _daiToken;
    }
}
