
exports.listenIP = '0.0.0.0'; //null; //Defaults to *
exports.listenPort = '8080'; //the SSL port things run on
exports.httpsVisiblePort = '8080'; //forwarded https port the user sees
exports.httpListenPort = '8081'; //this will all be redirected to SSL
exports.httpVisiblePort = '8081'; //forwarded http port the user sees
exports.cacheApps = true;


//SSL Info
exports.country = "US";
exports.state = "New York";
exports.locale = "New York";
exports.commonName = "coder.local";
exports.subjectAltName = "DNS:192.168.0.1";


//Experimental
//
//Status Server
//  This can be used in conjundtion with the sample findcoder
//  appengine project. It allows multiple Coders on the same
//  NAT network to be discoverable. Coder devices will ping the
//  external server with their internal IP, and the server
//  will list the devices for any requesting machine that
//  originates from the same external IP.
exports.statusServer = '[yourpingserver].appspot.com';
exports.enableStatusServer = false;
