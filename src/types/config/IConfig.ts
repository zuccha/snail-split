import { IColumnDefinition } from '../column-definition'


interface IConfig {
  fps: number

  autosave: boolean
  autosaveInterval: number
  autosaveShowMessage: boolean

  timeFont: 'slim' | 'fat'
  timeFormatDefault: string
  timeFormatBelowHour: string
  timeFormatBelowMinute: string
  timeFormatBelowSecond: string
  timeFormatZero: string
  timeFormatEmpty: string

  segmentColumnDefinitions: IColumnDefinition[]

  segmentTimeFormatDefault: string
  segmentTimeFormatBelowHour: string
  segmentTimeFormatBelowMinute: string
  segmentTimeFormatBelowSecond: string
  segmentTimeFormatZero: string
  segmentTimeFormatEmpty: string

  segmentDeltaFormatDefault: string
  segmentDeltaFormatBelowHour: string
  segmentDeltaFormatBelowMinute: string
  segmentDeltaFormatBelowSecond: string
  segmentDeltaFormatZero: string
  segmentDeltaFormatEmpty: string

  snackbarDuration: number
}


export default IConfig
