var express = require('express');
var server = express();
//var handlebars = require('hbs');
var path = require('path');

//server.set('view engine','hbs');
//server.set('views', __dirname + '/views');
server.use(express.static(path.join(__dirname, '.')));

server.get('/albums', function (req, resp) {
	var data = [{
		"id": "243",
		"name": "Djursn\u00e4s 14.08.08",
		"path": "djursnas140808",
		"description": "Ett par dagar p\u00e5 Djursn\u00e4s. Inget toppenv\u00e4der men vad g\u00f6r v\u00e4l det n\u00e4r man har egenfiskade kr\u00e4ftor!",
		"date": "2014-08-08",
		"desc": "0"
	}, {
		"id": "242",
		"name": "Juni 14.06.01",
		"path": "juni140601",
		"description": "Teds dop ute i det gr\u00f6na, hej p\u00e5 Melissa, f\u00f6delsedagsmiddag f\u00f6r Karin, lite b\u00e5tsightseeing med brollan och Livia s\u00e5 klart.",
		"date": "2014-06-21",
		"desc": "0"
	}, {
		"id": "241",
		"name": "Midsommar 14.06.20",
		"path": "midsommar140620",
		"description": "Ett mycket trevligt midsommarfirande p\u00e5 Kungshatt.",
		"date": "2014-06-20",
		"desc": "0"
	}];
	resp.setHeader("content-type", "application/json; charset=UTF-8");
        resp.json(data);
});


server.listen(3000);


