import readJson from '../../utils/readJson'
import { IEitherErrorOr } from '../either-error-or'
import IGame from './IGame'
import validateGame from './validateGame'


const loadGame = (
  filename: string,
): IEitherErrorOr<IGame> => {
  const json = readJson(filename)
  return json.errorMessage === undefined
    ? { data: validateGame(json.data) }
    : { error: json.errorMessage }
}


export default loadGame
