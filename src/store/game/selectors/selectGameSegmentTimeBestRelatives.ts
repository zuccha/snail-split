import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameSegmentTimeBestRelatives = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.map(segment => segment.timeBestRelative)
  },
)


export default selectGameSegmentTimeBestRelatives
