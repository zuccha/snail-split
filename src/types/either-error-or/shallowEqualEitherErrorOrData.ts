import { shallowEqual } from 'react-redux'
import IEitherErrorOr from './IEitherErrorOr'
import isData from './isData'
import isError from './isError'


const shallowEqualEitherErrorOrData = <T>(
  leftEitherErrorOrData: IEitherErrorOr<T>,
  rightEitherErrorOrData: IEitherErrorOr<T>,
): boolean => {
  if (isError(leftEitherErrorOrData) && isError(rightEitherErrorOrData)) {
    return leftEitherErrorOrData.error === rightEitherErrorOrData.error
  }

  if (isData(leftEitherErrorOrData) && isData(rightEitherErrorOrData)) {
    return shallowEqual(leftEitherErrorOrData.data, rightEitherErrorOrData.data)
  }

  return false
}


export default shallowEqualEitherErrorOrData
