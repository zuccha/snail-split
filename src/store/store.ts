import { combineReducers, createStore } from 'redux'
import reduceConfig from './config/reducer/reduceConfig'
import reduceGame from './game/reducer/reduceGame'
import reduceSnackbar from './snackbar/reducer/reduceSnackbar'


const reduceRoot = combineReducers({
  config: reduceConfig,
  game: reduceGame,
  snackbar: reduceSnackbar,
})


const store = createStore(reduceRoot)


export default store
