import { IGame, splitGame } from '../../../types/game'


const reduceGameSplit = (
  game: IGame,
): IGame => {
  return splitGame(game)
}


export default reduceGameSplit
