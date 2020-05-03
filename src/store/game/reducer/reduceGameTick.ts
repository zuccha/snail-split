import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, tickGame } from '../../../types/game'


const reduceGameTick = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return { data: tickGame(game) }
}


export default reduceGameTick
