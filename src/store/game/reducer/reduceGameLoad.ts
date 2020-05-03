import { IEitherErrorOr } from '../../../types/either-error-or'
import { IGame, validateGame } from '../../../types/game'
import readJson from '../../../utils/readJson'
import { IActionGameLoad } from '../types'


const reduceGameLoad = (
  eitherErrorOrGame: IEitherErrorOr<IGame>,
  action: IActionGameLoad,
): IEitherErrorOr<IGame> => {
  const filename = action.payload
  const json = readJson(filename)

  return json.errorMessage === undefined
    ? { data: validateGame(json.data) }
    : { error: `Failed to load game: ${json.errorMessage}.` }
}


export default reduceGameLoad
