import { validateArray } from '../array'
import { validateSegment } from '../segment'
import { validateString } from '../string'
import IGame from './IGame'
import defaultGame from './defaultGame'


const validateGame = (
  maybeGame: unknown,
  defaultValue = defaultGame,
): IGame => {
  if (typeof maybeGame !== 'object' || maybeGame === null) {
    return defaultValue
  }

  const inputGame = maybeGame as { [key: string]: unknown }

  return {
    errorMessage: undefined,
    title: validateString(inputGame.title, ''),
    segments: validateArray(inputGame.segments, [])
      .map(maybeSegment => validateSegment(maybeSegment)),
    timerStart: undefined,
  }
}


export default validateGame
