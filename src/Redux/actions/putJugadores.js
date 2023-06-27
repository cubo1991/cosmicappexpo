import axios from "axios";
import { PUT_JUGADORES } from "../../../Constantes/constantes";

export const putJugadores = (data) =>{
   
        return async function (dispatch){
          try{
            await axios.put('/copa/id/agregarJugador', data);
            dispatch({
              type: PUT_JUGADORES,
              
            }) 
          } catch (error){
            dispatch({
              type: PUT_JUGADORES,
              error:[error]
            })
          }
        }
      }