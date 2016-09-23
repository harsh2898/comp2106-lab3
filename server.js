/**
 * Created by test on 23/09/2016.
 */

// link to the connect package
var connect = require('connect');

// link to the url module to parse url parameters
var url = require('url');
var accounting = require('accounting');

// instantiate a new connect object
var app = connect();

//  setting lab3 function
var lab3 = function(req, res, next) {

    // getting values of method, x and y from the url
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    // checking the method
    if (method == 'add') {
        var total = parseInt(x) + parseInt(y);
        res.end(x + ' + ' + y + ' = ' + total );
    }
    else if (method == 'subtract') {
        var total = parseInt(x) - parseInt(y);
        res.end(x + ' - ' + y + ' = ' + total );
    }
    else if (method == 'multiply') {
        var total = parseInt(x) * parseInt(y);
        res.end(x + ' * ' + y + ' = ' + total );
    }
    else if (method == 'divide') {
        var total = parseInt(x) / parseInt(y);
        res.end(x + ' / ' + y + ' = ' + total );
    }
    else {
        res.end('Error....!!! \n Method should be add, subtract, multiply or divide.')
    }

};

// executing the function
app.use('/lab3', lab3);

// starting the web server on the port 3000
app.listen(3000);