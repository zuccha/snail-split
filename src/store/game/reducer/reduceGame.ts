import * as Game from '../../../types/game'
import {
  GAME_INVALIDATE_PREVIOUS_SEGMENT,
  GAME_LOAD,
  GAME_RESET,
  GAME_SPLIT,
  GAME_START,
  GAME_STOP,
  GAME_TICK,
  GAME_TOGGLE,
  IActionGame,
} from '../types'


const reduceGame = (
  game: Game.Game = Game.defaultGame,
  action: IActionGame,
): Game.Game => {
  switch (action.type) {
  case GAME_INVALIDATE_PREVIOUS_SEGMENT:
    return Game.invalidatePreviousSegment(game)
  case GAME_LOAD:
    return action.payload
  case GAME_RESET:
    return Game.reset(game)
  case GAME_SPLIT:
    return Game.split(game)
  case GAME_START:
    return Game.start(game)
  case GAME_STOP:
    return Game.stop(game)
  case GAME_TICK:
    return Game.tick(game)
  case GAME_TOGGLE:
    return Game.toggle(game)
  default:
    return game
  }
}


export default reduceGame
