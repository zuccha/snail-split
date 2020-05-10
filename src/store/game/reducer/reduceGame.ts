import {
  IGame,
  defaultGame,
  invalidatePreviousSegment,
  resetGame,
  splitGame,
  startGame,
  stopGame,
  tickGame,
  toggleGame,
} from '../../../types/game'
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
  game: IGame = defaultGame,
  action: IActionGame,
): IGame => {
  switch (action.type) {
  case GAME_INVALIDATE_PREVIOUS_SEGMENT:
    return invalidatePreviousSegment(game)
  case GAME_LOAD:
    return action.payload
  case GAME_RESET:
    return resetGame(game)
  case GAME_SPLIT:
    return splitGame(game)
  case GAME_START:
    return startGame(game)
  case GAME_STOP:
    return stopGame(game)
  case GAME_TICK:
    return tickGame(game)
  case GAME_TOGGLE:
    return toggleGame(game)
  default:
    return game
  }
}


export default reduceGame
