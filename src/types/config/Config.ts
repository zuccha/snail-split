import * as ColumnDefinition from '../column-definition'


interface Config {
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

  segmentColumnDefinitions: ColumnDefinition.ColumnDefinition[]

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

  showBestPossibleTime: boolean
  showSumOfBests: boolean
}


export default Config