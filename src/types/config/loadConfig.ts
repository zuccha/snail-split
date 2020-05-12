import readJson from '../../utils/readJson'
import * as EitherErrorOr from '../either-error-or'
import IConfig from './IConfig'
import validateConfig from './validateConfig'


const loadConfig = (
  filename: string,
): EitherErrorOr.EitherErrorOr<IConfig> => {
  const json = readJson(filename)
  return json.errorMessage === undefined
    ? { data: validateConfig(json.data) }
    : { error: json.errorMessage }
}


export default loadConfig
