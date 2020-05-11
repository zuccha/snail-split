import readJson from '../../utils/readJson'
import { IEitherErrorOr } from '../either-error-or'
import IGame from './IGame'
import computeBestPossibleTime from './computeBestPossibleTime'
import computeSumOfBests from './computeSumOfBests'
import validateGame from './validateGame'


const loadGame = (
  filename: string,
): IEitherErrorOr<IGame> => {
  const json = readJson(filename)

  if (json.errorMessage !== undefined) {
    return { error: json.errorMessage }
  }

  const game = validateGame(json.data)
  game.status = game.status === 'ongoing' ? 'pending' : game.status
  game.bestPossibleTime = computeBestPossibleTime(game)
  game.sumOfBests = computeSumOfBests(game)

  return { data: game }
}


export default loadGame
