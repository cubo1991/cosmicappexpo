import axios from "axios";
import { PUT_CAMPAÑA } from "../../../Constantes/constantes";


export const putCampaña =(data) => {
    
    return async function(dispatch){
    try {
      await axios.put(`/putCampanas/campana`, data);
        dispatch({
          type: PUT_CAMPAÑA
        })
    } catch (error) {
      dispatch({
        type: PUT_CAMPAÑA,
        error: [error]
      })
    }}
  }