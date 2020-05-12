import { validateArray } from '../array'
import * as GameStatus from '../game-status'
import * as Segment from '../segment'
import * as S from '../string'
import * as Time from '../time'
import Game from './Game'
import defaultGame from './defaultGame'


const validate = (
  maybeGame: unknown,
  defaultValue = defaultGame,
): Game => {
  if (typeof maybeGame !== 'object' || maybeGame === null) {
    return defaultValue
  }

  const inputGame = maybeGame as { [key: string]: unknown }

  return {
    title: S.validate(inputGame.title),
    category: S.validate(inputGame.category),
    segments: validateArray(inputGame.segments)
      .map(maybeSegment => Segment.validate(maybeSegment)),
    timerStart: undefined,
    status: GameStatus.validate(inputGame.status),
    bestPossibleTime: Time.validate(inputGame.bestPossibleTime),
    sumOfBests: Time.validate(inputGame.sumOfBests),
  }
}


export default validate
