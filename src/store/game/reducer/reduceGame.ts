import {
  GAME_RESET,
  GAME_SPLIT,
  GAME_START,
  GAME_STOP,
  GAME_TICK,
  GAME_TOGGLE,
  IActionGame,
  IStateGame,
} from '../types'
import reduceGameReset from './reduceGameReset'
import reduceGameSplit from './reduceGameSplit'
import reduceGameStart from './reduceGameStart'
import reduceGameStop from './reduceGameStop'
import reduceGameTick from './reduceGameTick'
import reduceGameToggle from './reduceGameToggle'


const initialGame: IStateGame = {
  title: 'Dark Souls',
  segments: [
    {
      name: 'Asylum Demon',
      timeBestRelative: 106000,
      timeLastRelative: undefined,
      timeGoldRelative: 105000,
    },
    {
      name: 'Taurus Demon',
      timeBestRelative: 188000,
      timeLastRelative: undefined,
      timeGoldRelative: 186000,
    },
    {
      name: 'Gargoyles',
      timeBestRelative: 155000,
      timeLastRelative: undefined,
      timeGoldRelative: 155000,
    },
    {
      name: 'Iron Golem',
      timeBestRelative: 341000,
      timeLastRelative: undefined,
      timeGoldRelative: 338000,
    },
    {
      name: 'O&S',
      timeBestRelative: 215000,
      timeLastRelative: undefined,
      timeGoldRelative: 150000,
    },
    {
      name: 'Stray Demon',
      timeBestRelative: 121000,
      timeLastRelative: undefined,
      timeGoldRelative: 119000,
    },
  ],
  timerStart: undefined,
}

const reduceGame = (
  game: IStateGame = initialGame,
  action: IActionGame,
): IStateGame => {
  switch (action.type) {
  case GAME_RESET:
    return reduceGameReset(game, action)
  case GAME_SPLIT:
    return reduceGameSplit(game, action)
  case GAME_START:
    return reduceGameStart(game, action)
  case GAME_STOP:
    return reduceGameStop(game, action)
  case GAME_TICK:
    return reduceGameTick(game, action)
  case GAME_TOGGLE:
    return reduceGameToggle(game, action)
  default:
    return game
  }
}


export default reduceGame
