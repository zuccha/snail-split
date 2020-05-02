import immer from 'immer'
import { IStateGame } from '../types'


const reduceGameStart = (
  game: IStateGame,
): IStateGame => {
  // There timer is already running.
  if (game.timerStart !== undefined) {
    return game
  }

  // The game is done.
  if (game.segments.every(segment => segment.timeLastRelative !== undefined)) {
    return game
  }

  // The game has not started yet.
  if (game.segments.every(segment => segment.timeLastRelative === undefined)) {
    return immer(game, gameDraft => {
      gameDraft.timerStart = Date.now()
      gameDraft.segments[0].timeLastRelative = 0
    })
  }

  // The game has already started.
  return immer(game, gameDraft => {
    gameDraft.timerStart = Date.now()
  })
}


export default reduceGameStart
