import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameDeltaLastBestRelatives = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.map(segment => (
      segment.timeLastRelative === undefined || segment.timeBestRelative === undefined
        ? undefined
        : segment.timeLastRelative - segment.timeBestRelative
    ))
  },
)


export default selectGameDeltaLastBestRelatives
