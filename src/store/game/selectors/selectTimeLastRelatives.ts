import { IStateGame } from '../types'


const selectTimeLastRelatives = (game: IStateGame): (number | undefined)[] => {
  return game.segments.map(segment => segment.timeLastRelative)
}


export default selectTimeLastRelatives
