import { validateArray } from '../array'
import { validateGameStatus } from '../game-status'
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
    title: validateString(inputGame.title),
    category: validateString(inputGame.category),
    segments: validateArray(inputGame.segments)
      .map(maybeSegment => validateSegment(maybeSegment)),
    timerStart: undefined,
    status: validateGameStatus(inputGame.status),
  }
}


export default validateGame
