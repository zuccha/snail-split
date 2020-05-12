import GameStatus from './GameStatus'


const validate = (
  maybeGameStatus: unknown,
  defaultValue: GameStatus = 'initial',
): GameStatus => {
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


export default validate
