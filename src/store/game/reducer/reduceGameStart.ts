import { IGame, startGame } from '../../../types/game'


const reduceGameStart = (
  game: IGame,
): IGame => {
  return startGame(game)
}


export default reduceGameStart
