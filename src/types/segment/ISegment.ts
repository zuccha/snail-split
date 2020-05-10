import { ITime } from '../time'


interface ISegment {
  name: string
  currentAbsoluteTime: ITime
  pbAbsoluteTime: ITime
  wrAbsoluteTime: ITime
  goldRelativeTime: ITime
}


export default ISegment
