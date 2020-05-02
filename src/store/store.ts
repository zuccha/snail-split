import { createStore } from 'redux'
import reduceGame from './game/reducer/reduceGame'


const store = createStore(reduceGame)


export default store
