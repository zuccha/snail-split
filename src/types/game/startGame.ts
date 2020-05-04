import immer from 'immer'
import IGame from './IGame'


const startGame = (game: IGame): IGame => {
  // There timer is already running.
  if (game.timerStart !== undefined) {
    return game
  }

  // The game is already done.
  if (game.segments.every(segment => segment.currentRelativeTime !== undefined)) {
    return game
  }

  // The game is not already done, start the timer.
  return immer(game, draftGame => {
    draftGame.timerStart = Date.now()
    // If game has not started yet, set the first segment as current.
    if (
      game.segments.length > 0 &&
        game.segments.every(segment => segment.currentRelativeTime === undefined)
    ) {
      draftGame.segments[0].currentRelativeTime = 0
    }
  })
}


export default startGame
