var mysql = require('mysql');

// Add the credentials to access your database
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // or the original password : 'apaswword'
    database : 'electronDatabase'
});

// Queries
function getFirstTenRows(callback){
    
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `artist` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}

function save(){
    name= document.getElementById("name").value;
    gender= document.getElementById("gender").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO artist (name,gender) VALUES ('"+name+"','"+gender+"')";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}

function destroy(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE artist SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}

function edit(id){
    name= document.getElementById("name").value;
    gender= document.getElementById("gender").value;
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE artist SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
function store(id){
    
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `artist` WHERE id='+id+'';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        name= document.getElementById("name").value;
        gender= document.getElementById("gender").value;
        /*console.log("Query succesfully executed", rows);*/
    });

}
