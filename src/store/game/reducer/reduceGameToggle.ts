import { IStateGame } from '../types'
import reduceGameStart from './reduceGameStart'
import reduceGameStop from './reduceGameStop'


const reduceGameToggle = (
  game: IStateGame,
): IStateGame => {
  return game.timerStart === undefined
    ? reduceGameStart(game)
    : reduceGameStop(game)
}


export default reduceGameToggle
