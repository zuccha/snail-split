import { createSelector } from 'reselect'
import findLast from '../../../utils/findLast'
import selectGame from './selectGame'


const selectGameCurrentTime = createSelector(
  selectGame,
  game => {
    const currentSegment = findLast(
      game.segments,
      segment => segment.currentAbsoluteTime !== undefined,
    )
    return currentSegment !== undefined
      ? currentSegment.currentAbsoluteTime
      : undefined
  },
)


export default selectGameCurrentTime
