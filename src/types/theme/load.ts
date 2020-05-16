import readJson from '../../utils/readJson'
import * as EitherErrorOr from '../either-error-or'
import Theme from './Theme'
import validate from './validate'


const load = (
  filename: string,
): EitherErrorOr.EitherErrorOr<Theme> => {
  const json = readJson(filename)
  return EitherErrorOr.isError(json)
    ? json
    : { data: validate(json.data) }
}


export default load
