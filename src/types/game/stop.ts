import immer from 'immer'
import * as A from '../array'
import Game from './Game'


const stop = (game: Game): Game => {
  if (game.status === 'initial') {
    return game
  }

  if (game.status === 'pending') {
    return game
  }

  if (game.status === 'ongoing') {
    if (game.timerStart === undefined) {
      return game
    }

    const currentSegmentIndex = A.findLastIndex(
      game.segments,
      segment => segment.currentAbsoluteTime !== undefined,
    )

    if (currentSegmentIndex === -1) {
      return game
    }

    return immer(game, gameDraft => {
      const now = Date.now()
      const elapsedTime = now - game.timerStart!
      gameDraft.segments[currentSegmentIndex].currentAbsoluteTime! += elapsedTime
      gameDraft.timerStart = undefined
      gameDraft.status = 'pending'
    })
  }

  if (game.status === 'done') {
    return game
  }

  return game
}


export default stop
