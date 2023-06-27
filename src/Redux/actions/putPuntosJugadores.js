import axios from "axios";
import { PUT_PUNTOSJUGADORES } from "../../../Constantes/constantes";


export const putPuntosJugadores = (data) =>{

   console.log(data)
    let datos = {'idCopa': data[0], 'jugadores': data[1]}

 
    return async function(dispatch){
try{
 
  await axios.put('/puntuacionJugador',datos );
  dispatch({
    type: PUT_PUNTOSJUGADORES
  })

}catch(error){
  dispatch({
    type:PUT_PUNTOSJUGADORES,
    error:[error]
  })

}}

  }