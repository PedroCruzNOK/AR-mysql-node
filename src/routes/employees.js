const express = require('express');
const router = express.Router();
const mysqlconection = require('../database');

router.get('/empleados', (req, res)=>{
    mysqlconection.query('SELECT * FROM empleado',(err, rows, fields)=>{
        if (!err){
            res.json(rows);
        } else {
            console.log('error al obtener datos');
        }
    });
});

router.get('/empleados/:id',(req, res)=>{
    const { id } = req.params;
    mysqlconection.query('SELECT * FROM empleado WHERE id_empleado=?',[id],(err, rows, fields)=>{
        if (!err){
            res.json(rows[0]);
        } else {
            console.log('error al obtener datos');
        }
    })
});

router.post('/create', function(req, res, next) {
    var product_name = req.body.product_name;
    var sku = req.body.sku;
    var price = req.body.price;
    var sql = `INSERT INTO products (product_name, sku, price, created_at) VALUES ("${product_name}", "${sku}", "${price}", NOW())`;
    db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    res.redirect('/products');
    });
});

router.post('/edit/:id', function(req, res, next) {
    var product_name = req.body.product_name;
    var sku = req.body.sku;
    var price = req.body.price;
    var id = req.params.id;
    var sql = `UPDATE products SET product_name="${product_name}", sku="${sku}", price="${price}" WHERE id=${id}`;
    db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record updated!');
    res.redirect('/products');
    });
});
module.exports = router;
