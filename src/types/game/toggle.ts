import Game from './Game'
import start from './start'
import stop from './stop'


const toggle = (game: Game): Game => {
  if (game.status === 'initial' || game.status === 'pending') {
    return start(game)
  }

  if (game.status === 'ongoing') {
    return stop(game)
  }

  return game
}


export default toggle
