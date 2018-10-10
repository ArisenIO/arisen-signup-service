// production vars.
let httpEndpoint = 'https://api.arising.io'

// use the dev endpoint (and vars) if "localhost" appears in hostname
if(window.location.hostname === "localhost") {
    httpEndpoint = 'https://api.arising.io'
}

export default {
    httpEndpoint,
    requiredChars: 12,
    nameLookup: 'https://eosflare.io/account'
}
