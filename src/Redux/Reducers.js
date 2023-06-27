import { DELETE_JUGADORES, FETCH_ALIENS, FETCH_COPAS, FETCH_JUGADORES, FETCH_RANKING, PUT_JUGADORES, PUT_RANKING } from "../../Constantes/constantes";
import { combineReducers } from 'redux';

const jugadoresReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_JUGADORES:
      return action.payload;
    case DELETE_JUGADORES:
      return [];
    default:
      return state;
  }
};

const rankingJugadoresReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RANKING:
      return action.payload;
    default:
      return state;
  }
};

const copasReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COPAS:
      return action.payload;
    default:
      return state;
  }
};

const copaFinalizadaReducer = (state = [], action) => {
  switch (action.type) {
    case PUT_RANKING:
      return action.payload;
    default:
      return state;
  }
};

const aliensReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALIENS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  jugadores: jugadoresReducer,
  rankingJugadores: rankingJugadoresReducer,
  copas: copasReducer,
  copaFinalizada: copaFinalizadaReducer,
  aliens: aliensReducer
});
