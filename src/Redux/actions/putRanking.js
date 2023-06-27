import axios from "axios";
import { PUT_RANKING } from "../../../Constantes/constantes";


export const putRanking = (data) => {
    console.log(data)
      let nuevosDatos = [];
      for(let datos of data){
        nuevosDatos.push({"Puntuación":datos['total'], "ID":datos['_id'] })
      }
      let podio = nuevosDatos.slice(0,4)
      console.log(podio)
  
      return async function(dispatch){
        try {
          await axios.put('/setPodio', podio );
          dispatch({
            type: PUT_RANKING
          })
        } catch (error) {
          dispatch({
          type: PUT_RANKING,
          error: [error]
        })
        }
      }
    }