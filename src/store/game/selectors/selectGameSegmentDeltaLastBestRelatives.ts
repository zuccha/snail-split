import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentDeltaLastBestRelatives = createSelector(
  selectGame,
  game => {
    return game.segments.map(segment => (
      segment.timeLastRelative === undefined || segment.timeBestRelative === undefined
        ? undefined
        : segment.timeLastRelative - segment.timeBestRelative
    ))
  },
)


export default selectGameSegmentDeltaLastBestRelatives
