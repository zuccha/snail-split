import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTime = createSelector(
  selectGame,
  (game: IStateGame): number => {
    return game.segments.reduce((acc, segment) => (
      acc + (segment.timeLastRelative || 0)
    ), 0)
  },
)


export default selectGameTime
