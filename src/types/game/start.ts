import immer from 'immer'
import Game from './Game'


const start = (game: Game): Game => {
  if (game.status === 'initial') {
    return immer(game, draftGame => {
      draftGame.timerStart = Date.now()
      draftGame.status = 'ongoing'

      // Make sure we reset all segments.
      draftGame.segments.forEach(segment => segment.currentAbsoluteTime = undefined)

      // Set first segment as current one.
      if (draftGame.segments.length > 0) {
        draftGame.segments[0].currentAbsoluteTime = 0
      }
    })
  }

  if (game.status === 'pending') {
    return immer(game, draftGame => {
      draftGame.timerStart = Date.now()
      draftGame.status = 'ongoing'
    })
  }

  if (game.status === 'ongoing') {
    return game
  }

  if (game.status === 'done') {
    return game
  }

  return game
}


export default start
