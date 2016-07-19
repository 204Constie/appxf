"use strict";

var request = require("request"),
    http = require("http"),
    url = require("url");

http.createServer(function proxy(req, res) {
    var log = true,
        setHeader,
        end,
        write;

    // Cut off the leading /
    req.url = req.url.substring(1);
 
    // Force universal access
    res.setHeader("Access-control-allow-origin", "*");
    
    // Overwrite setHeader, remove any other ACAO's
    setHeader = res.setHeader;
    res.setHeader = function (name) {
        if (name.toLowerCase() === "access-control-allow-origin") {
            return;
        }
        setHeader.apply(res, arguments);
    };
    
    // Remove the Origin & ref headers:
    delete req.headers.origin;
    delete req.headers.referer;
    // Set the correct host:
    req.headers.host = url.parse(req.url).host;
    
    // Proxy the request
    req.pipe(request(req.url)).pipe(res);
}).listen(8080);