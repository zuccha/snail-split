import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameSegmentNames = createSelector(
  selectGame,
  (game: IStateGame): string[] => {
    return game.segments.map(segment => segment.name)
  },
)


export default selectGameSegmentNames
