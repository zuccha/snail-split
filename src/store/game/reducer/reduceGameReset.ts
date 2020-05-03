import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, resetGame } from '../../../types/game'


const reduceGameReset = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return { data: resetGame(game) }
}


export default reduceGameReset
