import { createSelector } from 'reselect'
import findLast from '../../../utils/findLast'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTime = createSelector(
  selectGame,
  (game: IStateGame): number => {
    const currentSegment = findLast(
      game.segments,
      segment => segment.timeLastRelative !== undefined,
    )

    return currentSegment?.timeLastRelative || 0
  },
)


export default selectGameTime
