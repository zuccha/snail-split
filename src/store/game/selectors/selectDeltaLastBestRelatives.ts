import { IStateGame } from '../types'


const selectDeltaLastBestRelatives = (game: IStateGame): (number | undefined)[] => {
  return game.segments.map(segment => (
    segment.timeLastRelative === undefined || segment.timeBestRelative === undefined
      ? undefined
      : segment.timeLastRelative - segment.timeBestRelative
  ))
}


export default selectDeltaLastBestRelatives
