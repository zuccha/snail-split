import { ISegment } from '../segment'
import * as Time from '../time'
import { IGameStatus } from '../game-status'


interface IGame {
  title: string
  category: string
  segments: ISegment[]
  timerStart: Time.Time
  status: IGameStatus
  bestPossibleTime: Time.Time
  sumOfBests: Time.Time
}


export default IGame
