import { IStateGame } from '../types'


const selectTimeGoldRelatives = (game: IStateGame): (number | undefined)[] => {
  return game.segments.map(segment => segment.timeGoldRelative)
}


export default selectTimeGoldRelatives
