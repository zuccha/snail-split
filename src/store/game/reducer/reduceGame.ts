import { IEitherErrorOr } from '../../../types/either-error-or'
import { IGame, defaultGame } from '../../../types/game'
import {
  GAME_LOAD,
  GAME_RESET,
  GAME_SPLIT,
  GAME_START,
  GAME_STOP,
  GAME_TICK,
  GAME_TOGGLE,
  IActionGame,
} from '../types'
import reduceGameLoad from './reduceGameLoad'
import reduceGameReset from './reduceGameReset'
import reduceGameSplit from './reduceGameSplit'
import reduceGameStart from './reduceGameStart'
import reduceGameStop from './reduceGameStop'
import reduceGameTick from './reduceGameTick'
import reduceGameToggle from './reduceGameToggle'


const reduceGame = (
  eitherErrorOrGame: IEitherErrorOr<IGame> = { data: defaultGame },
  action: IActionGame,
): IEitherErrorOr<IGame> => {
  switch (action.type) {
  case GAME_LOAD:
    return reduceGameLoad(eitherErrorOrGame, action)
  case GAME_RESET:
    return reduceGameReset(eitherErrorOrGame)
  case GAME_SPLIT:
    return reduceGameSplit(eitherErrorOrGame)
  case GAME_START:
    return reduceGameStart(eitherErrorOrGame)
  case GAME_STOP:
    return reduceGameStop(eitherErrorOrGame)
  case GAME_TICK:
    return reduceGameTick(eitherErrorOrGame)
  case GAME_TOGGLE:
    return reduceGameToggle(eitherErrorOrGame)
  default:
    return eitherErrorOrGame
  }
}


export default reduceGame
