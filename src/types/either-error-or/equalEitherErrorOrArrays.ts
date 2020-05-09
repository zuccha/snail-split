import { equalArrays } from '../array'
import makeEqualEitherOr from './makeEqualEitherErrorOr'


const equalEitherErrorOrArrays = makeEqualEitherOr(equalArrays)


export default equalEitherErrorOrArrays
