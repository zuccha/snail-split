import immer from 'immer'
import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'


const tickGame = (game: IGame): IGame => {
  if (game.timerStart === undefined) {
    return game
  }

  const currentSegmentIndex = findLastIndex(
    game.segments,
    segment => segment.currentRelativeTime !== undefined,
  )

  if (currentSegmentIndex === -1) {
    return game
  }

  return immer(game, gameDraft => {
    const now = Date.now()
    const elapsedTime = now - game.timerStart!
    gameDraft.segments[currentSegmentIndex].currentRelativeTime! += elapsedTime
    gameDraft.timerStart = now
  })
}


export default tickGame
