import IEitherErrorOr, { IData } from './IEitherErrorOr'


const isData = <T>(eitherErrorOr: IEitherErrorOr<T>): eitherErrorOr is IData<T> => {
  return (eitherErrorOr as IData<T>).data !== undefined
}


export default isData
