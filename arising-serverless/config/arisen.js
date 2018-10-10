'use strict';

var keys = require('./keys')

module.exports = {
    chainId: 'fffa80dc4492fedaa90cbc4ee6f5520568826dfb31ed9c8c161224349f6b82f5', // 32 byte (64 char) hex string
    keyProvider: keys.rsn_pk, // WIF string or array of keys..
    httpEndpoint: 'https://greatchain.arisennodes.io',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true,
    creatorAccountName: 'bam'
}
