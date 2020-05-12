import readJson from '../../utils/readJson'
import * as EitherErrorOr from '../either-error-or'
import Config from './Config'
import validate from './validate'


const load = (
  filename: string,
): EitherErrorOr.EitherErrorOr<Config> => {
  const json = readJson(filename)
  return json.errorMessage === undefined
    ? { data: validate(json.data) }
    : { error: json.errorMessage }
}


export default load
