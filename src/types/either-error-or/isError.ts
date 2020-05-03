import IEitherErrorOr, { IError } from './IEitherErrorOr'


const isError = <T>(eitherErrorOr: IEitherErrorOr<T>): eitherErrorOr is IError => {
  return (eitherErrorOr as IError).error !== undefined
}


export default isError
