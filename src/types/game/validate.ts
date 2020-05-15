import fatal from '../../utils/fatal'
import * as A from '../array'
import * as GameStatus from '../game-status'
import * as Segment from '../segment'
import * as S from '../string'
import * as Time from '../time'
import Game from './Game'
import defaultGame from './defaultGame'


const validate = (
  maybeGame: unknown,
  defaultValue = defaultGame,
  property = 'game',
): Game => {
  if (maybeGame === undefined) {
    return defaultValue
  }

  if (typeof maybeGame !== 'object' || maybeGame === null) {
    fatal(
      `Failed to validate ${property}, `
      + `a game was expected but "${maybeGame}" was found instead`,
    )
  }

  const inputGame = maybeGame as { [key: string]: unknown }

  return {
    title: S.validate(
      inputGame.title,
      '',
      `${property}.title`,
    ),

    category: S.validate(
      inputGame.category,
      '',
      `${property}.category`,
    ),

    segments: A.validate(
      inputGame.segments,
      [],
      `${property}.segments`,
    ).map(maybeSegment => Segment.validate(maybeSegment)),

    timerStart: Time.validate(
      inputGame.timerStart,
      undefined,
      `${property}.timerStart`,
    ),

    status: GameStatus.validate(
      inputGame.status,
      'initial',
      `${property}.status`,
    ),

    bestPossibleTime: Time.validate(
      inputGame.bestPossibleTime,
      undefined,
      `${property}.bestPossibleTime`,
    ),

    sumOfBests: Time.validate(
      inputGame.sumOfBests,
      undefined,
      `${property}.sumOfBests`,
    ),
  }
}


export default validate
