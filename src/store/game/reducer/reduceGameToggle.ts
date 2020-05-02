import { IActionGame, IStateGame } from '../types'
import reduceGameStart from './reduceGameStart'
import reduceGameStop from './reduceGameStop'


const reduceGameToggle = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  return game.timerStart === undefined
    ? reduceGameStart(game, action)
    : reduceGameStop(game, action)
}


export default reduceGameToggle
