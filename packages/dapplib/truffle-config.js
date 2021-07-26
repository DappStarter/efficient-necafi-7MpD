require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn punch grace brand flower sponsor'; 
let testAccounts = [
"0xc84205df6a3e8e616dedcb37fe2583a2239812e87f1381462f02d3c1020d7ef9",
"0x07c9c7ad2578fac3fbb8d1d5a502d8f4e4f1b1abdb5480949c915b662201474e",
"0xf9181a2ae88d9acf4308ef4fbdd2dfca09f239e6a48fb355daf5f2b464416ef6",
"0x7ad99220dd6925cb4e5ec2be2b14cf5dfaff25667b02aee4ffbeb33627835956",
"0xbf7785c2b4723acbf8bca3017780af0823431c993278071d77a97bfd8e4ca9dc",
"0x11f9946fc498a3eeab5193e55c72985f078216aaddc637d589bae441ca72f96b",
"0x4c2b89db3b0d3c363ee952acb1a7e7b2a3ca5396c71bfbafb1d9bd64dc99177d",
"0xbb0041c733ee4e522250a7b324a2988343b37aef256580fcce415e2e88fddd7c",
"0x6c2a8345dd21da4fd63d758544e6c8100c1b4b887e9844ff2931e9fb9dc413f4",
"0xada4cdfba260c2d92b363a4d479a53e550e15b35857b6cdebe67708bc24834f0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

