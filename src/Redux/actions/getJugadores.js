import axios from "axios";
import { FETCH_JUGADORES } from "../../../Constantes/constantes";

export const fetchJugadores = () => {
    return async function (dispatch) {
      try {
        const jugadores = await axios.get('/jugadores');
        dispatch({
          type: FETCH_JUGADORES,
          payload: jugadores.data
        });
      } catch (error) {
        dispatch({
          type: FETCH_JUGADORES,
          error: [error]
        });
        console.log(error);
      }
    };
  };
