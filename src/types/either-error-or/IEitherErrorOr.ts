interface IData<T> {
  data: T
}

interface IError {
  error: string
}

type IEitherErrorOr<T> = IError | IData<T>


export default IEitherErrorOr

export {
  IData,
  IError,
}
