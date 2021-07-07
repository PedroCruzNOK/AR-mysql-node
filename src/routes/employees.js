const express = require('express');
const router = express.Router();

const mysqlconection = require('../database');
router.get('/', (req, res)=>{
    mysqlconection.query('SELECT * FROM empleado',(err, rows, fields)=>{
        if (!err){
            res.json(rows);
        } else {
            console.log('error al obtener datos');
        }
    });
});
router.get('/:id',(req, res)=>{
    const { id } = req.params;
    mysqlconection.query('SELECT * FROM empleado WHERE id_empleado=?',[id],(err, rows, fields)=>{
        if (!err){
            res.json(rows[0]);
        } else {
            console.log('error al obtener datos');
        }
    })
});

router.post('/', (req, res)=>{
    const {id_empleado, ap_paterno, ap_materno, nombre } = req.body;
    const query =  `
        SET @id_empleado = ?;
        SET @ap_paterno = ?;
        SET @ap_materno = ?;
        SET @nombre = ?;
        CALL agregarActualizarEmpleado (@id_empleado, @ap_paterno, @ap_materno, @nombre);

    `;
    mysqlconection.query(query, [id_empleado, ap_paterno, ap_materno, nombre], (err, rows, fields)=>{
        if (!err){
            res.json({status:'agregado'});
        } else {
            console.log(err);
        }
    });
    
});
module.exports = router;
