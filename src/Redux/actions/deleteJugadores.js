import axios from "axios";
import { DELETE_JUGADORES } from "../../../Constantes/constantes";

export const deleteJugadores = () =>{
        return async function (dispatch){
        
          try {
           await axios.delete('/jugadores', );
            dispatch({
              type:DELETE_JUGADORES,
              
            });
          } catch (error) {
            dispatch({
            type:DELETE_JUGADORES,
            error: [error]});
            console.log(error)
          }
        }
      }