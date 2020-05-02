import findLastAndMap from '../../../utils/findLastAndMap'
import { IActionGame, IStateGame } from '../types'


const reduceGameReduce = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  return {
    ...game,
    segments: game.segments.map(segment => ({
      ...segment,
      timeLastRelative: undefined,
    })),
    timerStart: undefined,
  }
}


export default reduceGameReduce
