var htmlpart1 = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->\n\t';
var htmlpart2 = '<title></title>\n</head>\n<body>\n\t\n</body>\n</html>';

var bootstrap = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\t';
var jquery = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"></script>\n\t';
var handlebars = '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>';
var angular = '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>';
var scriptutils = '<script type="text/javascript" src="https://unpkg.com/scriptutils"></script>';
var myString = '';

function textswap(text) {
	myString = '';
	if (text.includes("html") || text.includes("!")) {
		myString += htmlpart1;
	}
	if (text.includes("jq") || text.includes("jquery")) {
		myString += jquery;
	}
	if (text.includes("bootstrap") || text.includes("bs")) {
		myString += bootstrap;
	}
	if (text.includes("handlebars") || text.includes("hb")) {
		myString += handlebars;
	}
	if (text.includes("ng") || text.includes("angular")) {
		myString += angular;
	}
	if (text.includes("su") || text.includes("scriptutils")) {
		myString += scriptutils;
	}
	if (text.includes("html") || text.includes("!")) {
		myString += htmlpart2;
	}
	return myString;
}

module.exports=textswap;
