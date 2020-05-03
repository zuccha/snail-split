import { IGame } from '../../../types/game'
import reduceGameStart from './reduceGameStart'
import reduceGameStop from './reduceGameStop'


const reduceGameToggle = (
  game: IGame,
): IGame => {
  return game.timerStart === undefined
    ? reduceGameStart(game)
    : reduceGameStop(game)
}


export default reduceGameToggle
