import { ITime } from '../time'


interface ISegment {
  name: string
  currentRelativeTime: ITime
  pbRelativeTime: ITime
  wrRelativeTime: ITime
  goldRelativeTime: ITime
}


export default ISegment
