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

module.exports = router;
