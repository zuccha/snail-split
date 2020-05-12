import * as Time from '../time'
import Game from './Game'
import * as A from '../array'


const computeBestPossibleTime = (game: Game): Time.Time => {
  const currentSegmentIndex = A.findLastIndex(
    game.segments,
    segment => segment.currentAbsoluteTime !== undefined,
  )

  const segmentsAfterCurrent = game.segments.slice(
    currentSegmentIndex + 1,
    game.segments.length,
  )

  const currentSegment = game.segments[currentSegmentIndex]
  let bestPossibleTime = currentSegment?.currentAbsoluteTime === undefined
    ? 0
    : currentSegment.currentAbsoluteTime

  for (const segment of segmentsAfterCurrent) {
    if (segment.goldRelativeTime === undefined) {
      return undefined
    }
    bestPossibleTime += segment.goldRelativeTime
  }

  return bestPossibleTime
}


export default computeBestPossibleTime
