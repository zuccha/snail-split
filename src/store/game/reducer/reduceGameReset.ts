import { IGame, resetGame } from '../../../types/game'


const reduceGameReset = (
  game: IGame,
): IGame => {
  return resetGame(game)
}


export default reduceGameReset
