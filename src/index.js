const express = require ('express');
const app = express();
const  cors = require('cors');


app.use(
    cors({
      origin: ["http://192.168.100.184:3001", "http://localhost:5000", "http://localhost:8081"],
    })
  );
//configuracion del servidor
app.set('port', process.env.PORT || 3000);
//seccion de middlewares
app.use(express.json());
//rutas url's
app.use(require('./routes/employees'));
//iniciar el servidor 
app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto', app.get('port'));
});
