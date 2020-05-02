import { combineReducers, createStore } from 'redux'
import reduceGame from './game/reducer/reduceGame'


const reduceRoot = combineReducers({
  game: reduceGame,
})

const store = createStore(reduceRoot)


export default store
