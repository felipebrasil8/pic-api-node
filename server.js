var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database'),
	ip = '142.93.204.36';

http.createServer(app).listen(3000, ip, function() {
    console.log('API escutando na porta: ' + this.address().port);
});

