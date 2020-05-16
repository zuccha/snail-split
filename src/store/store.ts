import { combineReducers, createStore } from 'redux'
import reduceConfig from './config/reducer/reduceConfig'
import reduceGame from './game/reducer/reduceGame'
import reduceSavefile from './savefile/reducer/reduceSavefile'
import reduceSnackbar from './snackbar/reducer/reduceSnackbar'
import reduceTheme from './theme/reducer/reduceTheme'


const reduceRoot = combineReducers({
  config: reduceConfig,
  game: reduceGame,
  savefile: reduceSavefile,
  snackbar: reduceSnackbar,
  theme: reduceTheme,
})


const store = createStore(reduceRoot)


export default store
