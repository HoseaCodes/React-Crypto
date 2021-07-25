const { assert } = require('chai');
const { default: Web3 } = require('web3');

const TokenFarm = artifacts.require('./TokenFarm.sol')
const DaiToken = artifacts.require("DaiToken");
const PassiveToken = artifacts.require("PassiveToken");

require('chai')
  .use(require('chai-as-promised'))
  .should()

// Helper Functions

// Converts wei to ether
function tokens(n) {
    return web3.utils.toWei(n, 'ether');
}

contract('TokenFarm', ([owner, investor]) => {
    let daiToken, passiveToken, tokenFarm;

    before(async () => {
        daiToken = await DaiToken.new()
        passiveToken = await PassiveToken.new()
        tokenFarm = await TokenFarm.new(passiveToken.address, daiToken.address);

        // Transfer all Passive tokens to farm (1 Mill)
        await passiveToken.transfer(tokenFarm.address, tokens('1000000'))

        // Send tokens to investor
        await daiToken.transfer(investor, tokens('100'), {from: owner})

    })

    //Confirm DAI Token Name
    describe('Dai deloyment', async () => {
        it('has a name', async () => {
          const name = await daiToken.name()
          assert.equal(name, 'Mock DAI Token')
        })
    })

    // Confrim Passive Token Name
    describe('Passive deloyment', async () => {
        it('has a name', async () => {
          const name = await passiveToken.name()
          assert.equal(name, 'Passive Token')
        })
    })

    // Confrim Token Famr Token Name
    describe('Token Farm deloyment', async () => {
        it('has a name', async () => {
          const name = await tokenFarm.name()
          assert.equal(name, 'PattonU Token Farm')
        })
        
        // Confirm passive tokens have transfered to token farm
        it('contract has tokens', async () => {
            let balance = await passiveToken.balanceOf(tokenFarm.address)
            assert.equal(balance.toString(), tokens('1000000'))
        })
    })

    // Staking Function
    describe('Farming ', async () => {
        it('has a name', async () => {
          const name = await tokenFarm.name()
          assert.equal(name, 'PattonU Token Farm')
        })
        
        // Confirm passive tokens have transfered to token farm
        it('rewards investors for staking mDai tokens', async () => {
            let result
            // Check investor balance before staking
            result = await daiToken.balanceOf(investor)
            assert.equal(result.toString(), tokens('100'), 'investor Mock DAI wallet balance correct before staking')

            // Stake Mock DAI Tokens
            await daiToken.approve(tokenFarm.address, tokens('100'), {from: investor})
            // await tokenFarm.stakeTokens(tokens('100'), {from: investor})

            // Check staking balance after transfer
            // result = await daiToken.balanceOf(investor)
            // assert.equal(result.toString(), tokens('0'), 'investor Mock DAI wallet balance correct before staking')

            // result = await daiToken.balanceOf(tokenFarm.address)
            // assert.equal(result.toString(), tokens('100'), 'Token farm Mock DAI balance correct after staking')

            // result = await tokenFarm.stakingBalance(investor)
            // assert.equal(result.toString(), tokens('100'), 'investor staking balance correct after staking')

            // result = await tokenFarm.isStaking(investor)
            // assert.equal(result.toString(), 'true', 'investor staking status correct after staking')

            //Issue tokens
            // await tokenFarm.issueTokens({from: owner})

            // // Check balances after issued
            // result = await passiveToken.balanceOf(investor)
            // assert.equal(result.toString(), tokens('100'), 'investor passive token wallet balance correct after issued')

            // // Ensure that only owner can issue tokens
            // await tokenFarm.issueTokens({from: investor}).should.be.rejected;

        })
    })
})
