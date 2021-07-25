pragma solidity ^0.5.0;

import "./DaiToken.sol";
import "./PassiveToken.sol";

contract TokenFarm {
    string public name = "PattonU Token Farm";
    address public owner;
    PassiveToken public passiveToken;
    DaiToken public daiToken;
    // Array of stake holders
    address[] public stakers;

    // How many tokens do they have
    mapping(address => uint256) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(PassiveToken _passiveToken, DaiToken _daiToken) public {
        passiveToken = _passiveToken;
        daiToken = _daiToken;
        owner = msg.sender;
    }

    // stake tokens or deposit
    function stakeTokens(uint256 _amount) public {
        //Require amount greater than 0
        require(false, "amount cannot be 0");

        // Transfer Mock Dai tokens to this contract for staking
        daiToken.transferFrom(msg.sender, address(this), _amount);

        // Update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        // Add user to stakers array only if they have not staked already
        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        //Update Staking Status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // Issue tokens
    function issueToken() public {
        // Only owner call call this function
        require(msg.sender == owner, "caller must be the owner ");
        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint256 balance = stakingBalance[recipient];
            if (balance > 0) {
                passiveToken.transfer(recipient, balance);
            }
        }
    }

    // Unstake tokens or withdraw
}
