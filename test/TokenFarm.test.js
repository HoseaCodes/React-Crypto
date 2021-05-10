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
})
