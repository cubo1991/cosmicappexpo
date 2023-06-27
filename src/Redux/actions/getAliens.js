import axios from "axios";
import { FETCH_ALIENS } from "../../../Constantes/constantes";

  export const fetchAliens = () => {
    return async function (dispatch) {
      try {
        const aliens = await axios.get('/aliens/aliens');
        dispatch({
          type: FETCH_ALIENS,
          payload: aliens.data
        });
      } catch (error) {
        dispatch({
          type: FETCH_ALIENS,
          error: [error]
        });
        console.log(error);
      }
    };
  };