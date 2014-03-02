var serverModule = require("./Server"),
    http = require('http');

(function () {
    var mapModule = require("./Map");
    var map = new mapModule.Map();
    map.setSize(30, 20);
    map.map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,1],
        [1,13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,17,17,17,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,17,17,17,14,14,14,17,17,17,1,1,13,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,13,1,1,15,14,14,14,28,23,14,14,14,14,16,1,1,1,1],
        [1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,15,14,28,27,0,0,27,31,14,19,14,16,1,1,1],
        [1,13,1,1,1,1,1,1,1,1,1,1,1,1,1,15,14,22,0,0,0,0,0,31,14,14,14,16,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,14,14,22,0,0,0,0,23,14,14,19,14,16,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,18,14,14,22,21,0,0,0,33,14,14,16,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,18,14,14,14,22,21,25,14,14,14,16,1,1],
        [1,13,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,18,14,14,14,14,14,14,16,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,18,18,14,19,14,16,1,1,1,1],
        [1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1,13,1,1,1,1,18,16,16,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,13,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,13,1,1],
        [1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    var agents = [
        require("./agents/DummyAgent"),
        require("./agents/DummyAgent"),
        require("./agents/VeryDummy")
    ];

    var srv = new serverModule.Server(agents, map);
    srv.run();
})();
