import { IStateGame } from '../types'


const selectTimeBestRelatives = (game: IStateGame): (number | undefined)[] => {
  return game.segments.map(segment => segment.timeBestRelative)
}


export default selectTimeBestRelatives
