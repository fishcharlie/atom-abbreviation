var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>';
var htmlbootstrap = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->\n\t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>';
var htmljquery = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->\n\t<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"></script>\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>';
var htmlbootstrapjquery = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->\n\t<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"></script>\n\t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>';

function textswap(text) {
	if (text=="html" || text=="!") {
		return html;
	}
	if (text=="htmljq" || text=="htmljquery" || text=="!jq" || text=="!jquery") {
		return htmljquery;
	}
	if (text=="htmlbs" || text=="htmlbootstrap" || text=="!bs" || text=="!bootstrap") {
		return htmlbootstrap;
	}
	if (text=="htmljqbs" || text=="htmljquerybootstrap" || text=="htmlbsjq" || text=="htmlbootstrapjquery" || text=="!jqbs" || text=="!jquerybootstrap" || text=="!bsjq" || text=="!bootstrapjquery") {
		return htmlbootstrapjquery;
	}
}

module.exports=textswap;
