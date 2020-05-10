import { IGame, tickGame } from '../../../types/game'


const reduceGameTick = (
  game: IGame,
): IGame => {
  return tickGame(game)
}


export default reduceGameTick
