import * as Time from '../time'
import IGame from './IGame'
import findLastIndex from '../../utils/findLastIndex'


const computeBestPossibleTime = (game: IGame): Time.Time => {
  const currentSegmentIndex = findLastIndex(
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
