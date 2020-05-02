import { IActionGame, IStateGame } from '../types'


const reduceGameStart = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  if (game.timerStart !== undefined) {
    return game
  }

  return {
    ...game,
    timerStart: Date.now(),
  }
}


export default reduceGameStart
