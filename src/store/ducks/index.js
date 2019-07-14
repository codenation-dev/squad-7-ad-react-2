import { combineReducers } from 'redux';
import repositories from './repositories';

const reducers = combineReducers({
  // Adicione seus reducers (ducks) aqui
  repositories,
});

export default reducers;
