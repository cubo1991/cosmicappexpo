import axios from "axios";
import { COPA_FINALIZADA } from "../../../Constantes/constantes";


export const  finCopa = (data) => {
    let id= data.id
    
    console.log(data)
        return async function(dispatch){
          try {
            await axios.put(`/finCopa/${id}`, data);
            dispatch({
              type: COPA_FINALIZADA
            })
          } catch (error) {
            dispatch({
              type: COPA_FINALIZADA,
              error: [error]
            })
            
          }
        }
        
      }
    