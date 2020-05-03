import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, startGame } from '../../../types/game'


const reduceGameStart = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return { data: startGame(game) }
}


export default reduceGameStart
