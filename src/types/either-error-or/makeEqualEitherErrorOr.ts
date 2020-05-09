import IEitherErrorOr from './IEitherErrorOr'
import isData from './isData'
import isError from './isError'


const equalIdentity = <T>(left: T, right: T): boolean => {
  return left === right
}


const makeEqualEitherOr = <T>(
  equal: (left: T, right: T) => boolean = equalIdentity,
) => {
  return (
    leftEitherErrorOrData: IEitherErrorOr<T>,
    rightEitherErrorOrData: IEitherErrorOr<T>,
  ): boolean => {
    if (isError(leftEitherErrorOrData) && isError(rightEitherErrorOrData)) {
      return leftEitherErrorOrData.error === rightEitherErrorOrData.error
    }

    if (isData(leftEitherErrorOrData) && isData(rightEitherErrorOrData)) {
      return equal(leftEitherErrorOrData.data, rightEitherErrorOrData.data)
    }

    return false
  }
}


export default makeEqualEitherOr
