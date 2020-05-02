import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameSegmentTimeLastAbsolutes = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.reduce<(number | undefined)[]>((acc, segment, index) => [
      ...acc,
      segment.timeLastRelative === undefined
        ? undefined
        : (acc[index - 1] || 0) + segment.timeLastRelative,
    ], [])
  },
)


export default selectGameSegmentTimeLastAbsolutes
