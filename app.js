require('http').createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.send({
        msg: "テスト"
    });
}).listen(3000);