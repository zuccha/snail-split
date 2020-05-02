import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTimeLastAbsolutes = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.reduce<(number | undefined)[]>((acc, segment) => [
      ...acc,
      segment.timeLastRelative === undefined
        ? undefined
        : (acc[0] || 0) + segment.timeLastRelative,
    ], [])
  },
)


export default selectGameTimeLastAbsolutes
