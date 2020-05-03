import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, splitGame } from '../../../types/game'


const reduceGameSplit = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return { data: splitGame(game) }
}


export default reduceGameSplit
