import findFirstAndMap from '../../../utils/findFirstAndMap'
import { IActionGame, IStateGame } from '../types'
import reduceGameStop from './reduceGameStop'


const reduceGameTick = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  if (game.timerStart === undefined) {
    return game
  }

  const gameStopped = reduceGameStop(game, action)
  return {
    ...gameStopped,
    segments: findFirstAndMap(
      gameStopped.segments,
      segment => segment.timeLastRelative == undefined,
      segment => ({
        ...segment,
        timeLastRelative: 0,
      }),
    ),
    timerStart: Date.now(),
  }
}


export default reduceGameTick
