import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentTimeBestRelatives = createSelector(
  selectGame,
  game => {
    return game.segments.map(segment => segment.timeBestRelative)
  },
)


export default selectGameSegmentTimeBestRelatives
