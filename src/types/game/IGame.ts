import { ISegment } from '../segment'
import { ITime } from '../time'
import { IGameStatus } from '../game-status'


interface IGame {
  title: string
  segments: ISegment[]
  timerStart: ITime
  status: IGameStatus
}


export default IGame
