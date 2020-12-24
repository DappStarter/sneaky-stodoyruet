require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rifle spider uncle hunt slide outer slight'; 
let testAccounts = [
"0x991f1a37d498d869fef6c2d0d0769f1943ff03a8db48f2731c52472ebdeb9ad5",
"0x9fa7137773bf84bc3bf641e3e5981c23632eaf751281c3105fc7c4eaefff4d65",
"0x459e8e08c285e2f0724ffbc4b60b9383ef1f37d3750c8f2e7d4ad95440e284b6",
"0xfa3c5433db527bfff8944439ec23e949adbf69b2969b9c9f144ceeb76465f2fa",
"0x023de62c55cf41c1689d0bb1ecbf233e799a64242e432f47bd9ed9295bd046ca",
"0xa20dd61e04f3ab044be332ddd22c17ddc17c4c4479b7a8db7d02b8bc6de24e46",
"0x7a3259cf9d4dbc7b3dd1f92e4eb459be27099847b3db38d31d82e5d22cdc539d",
"0x593daaa1d73df0b8e37ec6e2fb9b93faa42e17a5687c0695500cfb585fc88bfd",
"0xecd549c3314ae02fe2e3fd5564c0c4ecafbd43ccc816a88201a768da2685ffc6",
"0x1e734570b6bbe62df5acadb2108f6b2c88df29569a6dddfd8297229fbfaf4a14"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
