export const GAME_TICK  = 'game/tick'
export const GAME_START = 'game/start'
export const GAME_STOP  = 'game/stop'
export const GAME_RESET = 'game/reset'
export const GAME_SPLIT = 'game/split'

interface IActionGameTick {
  type: typeof GAME_TICK
}

interface IActionGameStart {
  type: typeof GAME_START
}

interface IActionGameStop {
  type: typeof GAME_STOP
}

interface IActionGameReset {
  type: typeof GAME_RESET
}

interface IActionGameSplit {
  type: typeof GAME_SPLIT
}

export type IActionGame =
  IActionGameTick
  | IActionGameStart
  | IActionGameStop
  | IActionGameReset
  | IActionGameSplit

export interface IStateSegment {
  name: string
  timeLastRelative: number | undefined
  timeBestRelative: number | undefined
  timeGoldRelative: number | undefined
}

export interface IStateGame {
  title: string
  segments: IStateSegment[]
  timerStart: number | undefined
}
