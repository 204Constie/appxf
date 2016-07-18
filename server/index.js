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
    
    // Always log the URL
    console.log("proxying " + req.url);
    
    // Force universal access
    res.setHeader("Access-control-allow-origin", "*");
    
    // Overwrite setHeader, remove any other ACAO's
    setHeader = res.setHeader;
    res.setHeader = function (name, value) {
        if (name.toLowerCase() === "access-control-allow-origin") {
            return;
        }
        if (log) {
            console.log(name + ": " + value);
        }
        setHeader.apply(res, arguments);
    };
    if (log) {
        write = res.write;
        res.write = function (data) {
            console.log("write", new Buffer(data).toString());
            write.apply(res, arguments);
        };
        end = res.end;
        res.end = function () {
            console.log("end", arguments);
            end.apply(res, arguments);
        };
    }
    
    // Remove the Origin & ref headers:
    delete req.headers.origin;
    delete req.headers.referer;
    // Set the correct host:
    req.headers.host = url.parse(req.url).host;
    
    if (log) {
        console.log("Request headers", req.headers);
    }
    
    // Proxy the request
    req.pipe(request(req.url)).pipe(res);
}).listen(8080);