import { validateArray } from '../array'
import * as GameStatus from '../game-status'
import * as Segment from '../segment'
import { validateString } from '../string'
import * as Time from '../time'
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
      .map(maybeSegment => Segment.validate(maybeSegment)),
    timerStart: undefined,
    status: GameStatus.validate(inputGame.status),
    bestPossibleTime: Time.validate(inputGame.bestPossibleTime),
    sumOfBests: Time.validate(inputGame.sumOfBests),
  }
}


export default validateGame
