import { combineReducers, createStore } from 'redux'
import reduceConfig from './config/reducer/reduceConfig'
import reduceGame from './game/reducer/reduceGame'


const reduceRoot = combineReducers({
  config: reduceConfig,
  game: reduceGame,
})

const store = createStore(reduceRoot)


export default store
