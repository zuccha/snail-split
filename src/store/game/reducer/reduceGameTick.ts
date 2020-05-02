import findLastAndMap from '../../../utils/findLastAndMap'
import { IActionGame, IStateGame } from '../types'


const reduceGameTick = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  if (game.timerStart === undefined) {
    return game
  }

  const timeElapsed = Date.now() - game.timerStart
  return {
    ...game,
    segments: findLastAndMap(
      game.segments,
      segment => segment.timeLastRelative !== undefined,
      segment => ({
        ...segment,
         timeLastRelative: segment.timeLastRelative! + timeElapsed,
      }),
    ),
    timerStart: Date.now(),
  }
}


export default reduceGameTick
