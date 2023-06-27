import axios from "axios";
import { FETCH_COPAS } from "../../../Constantes/constantes";

  export const fetchCopas = () => {
    return async function (dispatch) {
      try {
        const copas = await axios.get('/copa');
        dispatch({
          type: FETCH_COPAS,
          payload: copas.data
        });
      } catch (error) {
        dispatch({
          type: FETCH_COPAS,
          error: [error]
        });
        console.log(error);
      }
    };
  };