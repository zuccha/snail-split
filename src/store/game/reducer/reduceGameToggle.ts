import { IGame, toggleGame } from '../../../types/game'


const reduceGameToggle = (
  game: IGame,
): IGame => {
  return toggleGame(game)
}


export default reduceGameToggle
