import findLastAndMap from '../../../utils/findLastAndMap'
import { IActionGame, IStateGame } from '../types'


const reduceGameReset = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  return {
    ...game,
    segments: game.segments.map((segment, segmentIndex) => ({
      ...segment,
      timeLastRelative: segmentIndex === 0 ? 0 : undefined,
    })),
    timerStart: undefined,
  }
}


export default reduceGameReset
