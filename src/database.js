const mysql = require ('mysql');

const mysqlconection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'controlvacacional'
});
mysqlconection.connect(function (err){
    if (err){
        console.log(err);
        return;
    } else{
        console.log('base de datos conectada');
    }
});

module.exports = mysqlconection;