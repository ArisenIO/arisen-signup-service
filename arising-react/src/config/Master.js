// production vars.
let httpEndpoint = 'https://hrdj7oj2oj.execute-api.us-east-1.amazonaws.com/dev/'

// use the dev endpoint (and vars) if "localhost" appears in hostname
if(window.location.hostname === "localhost") {
    httpEndpoint = 'https://hrdj7oj2oj.execute-api.us-east-1.amazonaws.com/dev/'
}

export default {
    httpEndpoint,
    requiredChars: 12,
    nameLookup: 'https://eosflare.io/account'
}
