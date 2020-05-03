import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, stopGame } from '../../../types/game'


const reduceGameStop = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return { data: stopGame(game) }
}


export default reduceGameStop
