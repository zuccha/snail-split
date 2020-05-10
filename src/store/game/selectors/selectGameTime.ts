import { createSelector } from 'reselect'
import findLast from '../../../utils/findLast'
import selectGame from './selectGame'


const selectGameTime = createSelector(
  selectGame,
  game => {
    const currentSegment = findLast(
      game.segments,
      segment => segment.currentAbsoluteTime !== undefined,
    )
    return currentSegment
      ? currentSegment.currentAbsoluteTime!
      : 0
  },
)


export default selectGameTime
