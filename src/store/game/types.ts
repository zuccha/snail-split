import * as Game from '../../types/game'


const GAME_INVALIDATE_PREVIOUS_SEGMENT  = 'game/invalidate-previous-segment'
const GAME_LOAD  = 'game/load'
const GAME_RESET  = 'game/reset'
const GAME_SPLIT  = 'game/split'
const GAME_START  = 'game/start'
const GAME_STOP   = 'game/stop'
const GAME_TICK   = 'game/tick'
const GAME_TOGGLE = 'game/toggle'

interface IActionGameInvalidatePreviousSegment {
  type: typeof GAME_INVALIDATE_PREVIOUS_SEGMENT
}

interface IActionGameLoad {
  type: typeof GAME_LOAD
  payload: Game.Game
}

interface IActionGameReset {
  type: typeof GAME_RESET
}

interface IActionGameSplit {
  type: typeof GAME_SPLIT
}

interface IActionGameStart {
  type: typeof GAME_START
}

interface IActionGameStop {
  type: typeof GAME_STOP
}

interface IActionGameTick {
  type: typeof GAME_TICK
}

interface IActionGameToggle {
  type: typeof GAME_TOGGLE
}

type IActionGame =
  IActionGameLoad
  | IActionGameInvalidatePreviousSegment
  | IActionGameReset
  | IActionGameSplit
  | IActionGameStart
  | IActionGameStop
  | IActionGameTick
  | IActionGameToggle


export {
  GAME_INVALIDATE_PREVIOUS_SEGMENT,
  GAME_LOAD,
  GAME_RESET,
  GAME_SPLIT,
  GAME_START,
  GAME_STOP,
  GAME_TICK,
  GAME_TOGGLE,
  IActionGame,
  IActionGameInvalidatePreviousSegment,
  IActionGameLoad,
  IActionGameReset,
  IActionGameSplit,
  IActionGameStart,
  IActionGameStop,
  IActionGameTick,
  IActionGameToggle,
}
