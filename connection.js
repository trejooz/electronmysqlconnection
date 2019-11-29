var mysql = require('mysql');


// Queries
function getFirstTenRows(callback){
    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root', // or the original password : 'apaswword'
        database : 'electronDatabase'
    });
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    $query = 'SELECT * FROM `artist` LIMIT 10';

    connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

    // Close the connection
    connection.end(function(){
        // The connection has been closed
    });
}
