
import mongoose, {connect} from "mongoose";

const conectarBD = () => {

  const urlConexion = String(process.env.MONGO_URL);
  connect(urlConexion)
    .then(com => {
      console.log(`Conexion establecida con la base: $(urlConexion)`);
    })
    .catch(error => {
    console.log(error)
    });

};


export default conectarBD;