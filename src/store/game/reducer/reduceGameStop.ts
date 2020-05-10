import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, stopGame } from '../../../types/game'


const reduceGameStop = (
  game: IGame,
): IGame => {
  return stopGame(game)
}


export default reduceGameStop
