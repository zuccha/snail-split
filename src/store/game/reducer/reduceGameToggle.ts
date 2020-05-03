import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, startGame, stopGame } from '../../../types/game'


const reduceGameToggle = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
): IEitherErrorOr<IGame> => {
  if (isError(eitherErrorOrGame)) {
    return eitherErrorOrGame
  }

  const game = eitherErrorOrGame.data
  return {
    data: game.timerStart === undefined
      ? startGame(game)
      : stopGame(game),
  }
}


export default reduceGameToggle
