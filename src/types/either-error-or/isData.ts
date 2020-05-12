import EitherErrorOr, { Data } from './EitherErrorOr'


const isData = <T>(eitherErrorOr: EitherErrorOr<T>): eitherErrorOr is Data<T> => {
  return (eitherErrorOr as Data<T>).data !== undefined
}


export default isData
