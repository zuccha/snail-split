import { IGame, defaultGame } from '../../../types/game'
import {
  GAME_LOAD,
  GAME_RESET,
  GAME_SAVE,
  GAME_SPLIT,
  GAME_START,
  GAME_STOP,
  GAME_TICK,
  GAME_TOGGLE,
  IActionGame,
} from '../types'
import reduceGameLoad from './reduceGameLoad'
import reduceGameReset from './reduceGameReset'
import reduceGameSave from './reduceGameSave'
import reduceGameSplit from './reduceGameSplit'
import reduceGameStart from './reduceGameStart'
import reduceGameStop from './reduceGameStop'
import reduceGameTick from './reduceGameTick'
import reduceGameToggle from './reduceGameToggle'


const reduceGame = (
  game: IGame = defaultGame,
  action: IActionGame,
): IGame => {
  switch (action.type) {
  case GAME_LOAD:
    return reduceGameLoad(game, action)
  case GAME_RESET:
    return reduceGameReset(game)
  case GAME_SAVE:
    return reduceGameSave(game, action)
  case GAME_SPLIT:
    return reduceGameSplit(game)
  case GAME_START:
    return reduceGameStart(game)
  case GAME_STOP:
    return reduceGameStop(game)
  case GAME_TICK:
    return reduceGameTick(game)
  case GAME_TOGGLE:
    return reduceGameToggle(game)
  default:
    return game
  }
}


export default reduceGame
