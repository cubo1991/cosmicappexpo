import axios from 'axios';
import { COPA_FINALIZADA, CREATE_COPA, DELETE_JUGADORES, FETCH_ALIENS, FETCH_COPAS, FETCH_JUGADORES, FETCH_RANKING, POST_JUGADOR, PUT_CAMPAÑA, PUT_JUGADORES, PUT_PUNTOSJUGADORES, PUT_RANKING } from '../Constantes/constantes';




  
 
  

  




  

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