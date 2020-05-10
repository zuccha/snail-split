import immer from 'immer'
import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'


const tickGame = (game: IGame): IGame => {
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

    const currentSegmentIndex = findLastIndex(
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
      gameDraft.timerStart = now
    })
  }

  if (game.status === 'done') {
    return game
  }

  return game
}


export default tickGame
