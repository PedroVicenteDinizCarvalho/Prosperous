require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-eN9VM_JmKgWur7QbVSa2T9xh3MQ33Tk',
      accounts: [ 'ad439bf2009e3e4b1db848d0a9bfa6b311620b441db65072848b659f664230af' ]
    }
  }
}