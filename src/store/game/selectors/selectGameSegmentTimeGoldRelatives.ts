import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentTimeGoldRelatives = createSelector(
  selectGame,
  game => {
    return game.segments.map(segment => segment.timeGoldRelative)
  },
)


export default selectGameSegmentTimeGoldRelatives
