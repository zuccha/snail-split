import EitherErrorOr, { Error } from './EitherErrorOr'


const isError = <T>(eitherErrorOr: EitherErrorOr<T>): eitherErrorOr is Error => {
  return (eitherErrorOr as Error).error !== undefined
}


export default isError
