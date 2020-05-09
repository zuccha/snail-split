import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, toggleGame } from '../../../types/game'


const reduceGameToggle = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return {
    data: toggleGame(game),
  }
}


export default reduceGameToggle
