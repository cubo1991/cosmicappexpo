import axios from "axios";
import { CREATE_COPA } from "../../../Constantes/constantes";

export const createCopa =(data) => {
        return async function (dispatch) {
          try {
            await axios.post('/copa', data);
             dispatch({
               type:CREATE_COPA,
               
             });
           } catch (error) {
             dispatch({
             type:CREATE_COPA,
             error: [error]});
             console.log(error)
           }
        }
      }