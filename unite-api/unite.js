var opera.io.webserver = function () {
    this.publicIP = '';
    this.publicPort = 0;
    this.connections = {};
    this.originURL = '';
    this.currentServiceName = '';
    this.currentServicePath = '';
    this.proxyName = '';
    this.hostName = '';
    this.deviceName = '';
    this.userName = '';
    this.port = '';
    this.services = [];
    this.getContentType = function ( file )
    this.addEventListener = function ( pathFragment, handler, useCapture ) { ; }
    this.removeEventListener = function ( pathFragment, handler, useCapture ) { ; }
    this.shareFile = function ( file, path ) { ; }
    this.unshareFile = function ( file ) { ; }
    this.sharePath = function ( path, file ) { ; }
    this.unsharePath = function ( path ) { ; }
}
var WebServerServiceDescriptor = function () {
    this.authentication = false;
    this.originURL = '';
    this.servicePath = '';
    this.name = '';
    this.description = '';
    this.author = '';
    this.uri = '';
}
var WebServerConnection = function () {
    this.request = {};
    this.response = {};
    this.isProxied = false;
    this.isLocal = false;
    this.isOwner = false;
    this.closed = false;
    this.id = 0;
}
var WebServerRequest = function () {
    this.connection = {};
    this.method = '';
    this.ip = '';
    this.protocol = '';
    this.host = '';
    this.headers = {};
    this.bodyItems = {};
    this.queryItems = {};
    this.files = {};
    this.body = '';
    this.uri = '';
    this.getRequestHeader = function ( requestHeader ) { ; }
    this.getItem = function ( requestItem, method ) { ; }
}
var WebServerRequestEvent = function () {
    this.id = 0;
    this.connection = null;
}
var WebServerResponse = function () {
    this.connection = {};
    this.closed = false;
    this.chunked = true;
    this.implicitFlush = false;
    this.setStatusCode = function ( statusCode, text ) { ; }
    this.setResponseHeader = function ( name, value ) { ; }
    this.setProtocolString = function ( protocolString ) { ; }
    this.write = function ( data ) { ; }
    this.writeLine = function ( data ) { ; }
    this.writeBytes = function ( data ) { ; }
    this.writeFile = function ( file ) { ; }
    this.writeImage = function ( image ) { ; }
    this.flush = function ( callback ) { ; }
    this.close = function ( callback ) { ; }
    this.closeAndRedispatch = function () { ; }
}