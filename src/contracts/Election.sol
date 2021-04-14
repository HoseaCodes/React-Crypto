pragma solidity ^0.5.0;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    // Store accounts that have voted
    mapping(address => bool) public votedornot;
    // Store Candidates
    // Fetch Candidate
    mapping(uint256 => Candidate) public candidates;
    // Store Candidates Count
    uint256 public candidatesCount;

    // voted event
    event electionupdates(uint256 indexed _candidateId);

    constructor() public {
        addCandidate("Donald trumph");
        addCandidate("Barack obama");
    }

    function addCandidate(string memory name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    function vote(uint256 _candidateId) public {
        // require that they haven't voted before
        require(!votedornot[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // update candidate vote Count
        candidates[_candidateId].voteCount++;

        // record that voter has voted
        votedornot[msg.sender] = true;

        // trigger voted event
        emit electionupdates(_candidateId);
    }
}
