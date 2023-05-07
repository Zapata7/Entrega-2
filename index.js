import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/db.js';

//swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

//Importacion de rutas
import user from "./routes/user.js";

//Iniciamos el servidor express

const app = express()
app.use(express.json())//Para leer los datos en formato json

//Iniciamos variabkes de entorno
dotenv.config();

//Conectar a BD mongo
conectarBD();

//Routing del api
app.use("/api/user", user);

//Ruta de la documentacion
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

//Obtenemos una variable de entorno
const PORT = process.env.PORT || 3000

//Lanzando el API
app.listen(PORT,()=>{
  console.log(`Api escuchando en ${PORT}`)
})

export default app;

