import fatal from '../../utils/fatal'
import GameStatus from './GameStatus'


const validate = (
  maybeGameStatus: unknown,
  defaultValue: GameStatus = 'initial',
  property = 'property',
): GameStatus => {
  if (maybeGameStatus === undefined) {
    return defaultValue
  }

  if (typeof maybeGameStatus !== 'string' || (
    maybeGameStatus !== 'initial' &&
    maybeGameStatus !== 'pending' &&
    maybeGameStatus !== 'ongoing' &&
    maybeGameStatus !== 'done'
  )) {
    fatal(
      `Failed to validate ${property}, `
      + `a game status was expected but "${maybeGameStatus}" was found instead`,
    )
  }

  return maybeGameStatus as GameStatus
}


export default validate
