import axios from "axios";
import { FETCH_RANKING } from "../../../Constantes/constantes";

export const fetchRanking = () => {
    return async function (dispatch){
      try {
        const ranking = await axios.get('/ranking');
        dispatch({
          type:FETCH_RANKING,
          payload: ranking.data
        });
      } catch (error) {
        dispatch({
        type:FETCH_RANKING,
        error: [error]});
        console.log(error)
      }
    }
  }