import axios from "axios";
import { POST_JUGADOR } from "../../../Constantes/constantes";

export const postJugador = (data) => {

        return async function (dispatch){
        
          try {
           await axios.post('/jugador', data);
            dispatch({
              type:POST_JUGADOR,
              
            });
          } catch (error) {
            dispatch({
            type:POST_JUGADOR,
            error: [error]});
            console.log(error)
          }
        }
      }