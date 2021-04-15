pragma solidity ^0.5.0;

contract PattonUToken {
    //coin information
    string public name = "PattonU Token";
    string public symbol = "PUTK";
    uint256 public total = 1000000000000000000000000; // 1 million tokens
    uint8 public decimals = 18;

    // Events
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Borrowed(address borrower, uint256 _value, uint256 timestamp);
    event Balance(address _from, uint256 _value);

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    // Saves user balance of token and allowed amount to take out
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) allowed;
    mapping(address => uint256) timestamp; // timestamp of last borrowed time

    constructor() public {
        balances[msg.sender] = total;
    }

    // transfers tokens from one user to another
    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        uint256 senderBalance = balances[msg.sender];
        require(senderBalance >= _value, "You don't have enough tokens");
        senderBalance -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_value <= balances[_from]);
        require(_value <= allowed[_from][msg.sender]);
        balances[_from] -= _value;
        balances[_to] += _value;
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // this function will return the total amount of tokens
    function totalSupply() public view returns (uint256) {
        return total;
    }

    // will return the number of tokens the msg sender has left
    function balanceOf(address _owner) public view returns (uint256) {
        // emit Balance(_owner, balances[_owner]);
        return balances[_owner];
    }

    function allowance(address _owner, address _spender)
        public
        view
        returns (uint256)
    {
        return allowed[_owner][_spender];
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function borrow(address _borrower, uint256 _value) public payable {
        require(_value <= 100000);
        balances[_borrower] =
            balances[_borrower] +
            (_value * 1000000000000000000);
        timestamp[_borrower] = block.timestamp;
        emit Borrowed(_borrower, _value, block.timestamp);
    }

    function donate(address _donator, uint256 _value) public payable {
        require(balances[_donator] >= _value * 1000000000000000000);
        balances[_donator] = balances[_donator] - _value * 1000000000000000000;
    }
}
