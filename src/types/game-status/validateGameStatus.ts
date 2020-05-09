import IGameStatus from './IGameStatus'


const validateGameStatus = (
  maybeGameStatus: unknown,
  defaultValue: IGameStatus = 'initial',
): IGameStatus => {
  if (
    maybeGameStatus === 'initial' ||
    maybeGameStatus === 'pending' ||
    maybeGameStatus === 'ongoing' ||
    maybeGameStatus === 'done'
  ) {
    return maybeGameStatus
  }

  return defaultValue
}


export default validateGameStatus
