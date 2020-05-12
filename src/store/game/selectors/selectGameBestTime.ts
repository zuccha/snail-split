import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameBestTime = createSelector(
  selectGame,
  game => {
    const lastSegment = game.segments[game.segments.length - 1]
    return lastSegment !== undefined
      ? lastSegment.pbAbsoluteTime
      : undefined
  },
)


export default selectGameBestTime
