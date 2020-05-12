import readJson from '../../utils/readJson'
import * as EitherErrorOr from '../either-error-or'
import Game from './Game'
import computeBestPossibleTime from './computeBestPossibleTime'
import computeSumOfBests from './computeSumOfBests'
import validate from './validate'


const load = (
  filename: string,
): EitherErrorOr.EitherErrorOr<Game> => {
  const json = readJson(filename)

  if (json.errorMessage !== undefined) {
    return { error: json.errorMessage }
  }

  const game = validate(json.data)
  game.status = game.status === 'ongoing' ? 'pending' : game.status
  game.bestPossibleTime = computeBestPossibleTime(game)
  game.sumOfBests = computeSumOfBests(game)

  return { data: game }
}


export default load
