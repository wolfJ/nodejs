var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var userHandler = require("./userHandler");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/start1"] = requestHandlers.start1;
handle["/upload"] = requestHandlers.upload;
handle["/user"]=userHandler.show;
handle["/user/encrypt"]=userHandler.encrypt;

server.start(router.route,handle);