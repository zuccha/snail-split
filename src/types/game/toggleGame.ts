import IGame from './IGame'
import startGame from './startGame'
import stopGame from './stopGame'


const toggleGame = (game: IGame): IGame => {
  if (game.status === 'initial') {
    return startGame(game)
  }

  if (game.status === 'pending') {
    return startGame(game)
  }

  if (game.status === 'ongoing') {
    return stopGame(game)
  }

  if (game.status === 'done') {
    return game
  }

  return game
}


export default toggleGame
