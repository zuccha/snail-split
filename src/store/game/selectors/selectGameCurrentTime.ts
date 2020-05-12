import { createSelector } from 'reselect'
import * as A from '../../../types/array'
import selectGame from './selectGame'


const selectGameCurrentTime = createSelector(
  selectGame,
  game => {
    const currentSegment = A.findLast(
      game.segments,
      segment => segment.currentAbsoluteTime !== undefined,
    )
    return currentSegment !== undefined
      ? currentSegment.currentAbsoluteTime
      : undefined
  },
)


export default selectGameCurrentTime
