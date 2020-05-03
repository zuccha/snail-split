import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentTimeLastRelatives = createSelector(
  selectGame,
  game => {
    return game.segments.map(segment => segment.timeLastRelative)
  },
)


export default selectGameSegmentTimeLastRelatives
