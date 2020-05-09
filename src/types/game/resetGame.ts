import immer from 'immer'
import IGame from './IGame'


const resetGame = (game: IGame): IGame => {
  return immer(game, draftGame => {
    draftGame.status = 'initial'
    draftGame.timerStart = undefined
    draftGame.segments.forEach(segment => {
      segment.currentRelativeTime = undefined
    })
  })
}


export default resetGame
