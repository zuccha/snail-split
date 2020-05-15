import * as BigTextFont from '../big-text-font'
import * as ColumnDefinition from '../column-definition'
import * as ConfigKeybindingMap from '../config-keybinding-map'


interface Config {
  fps: number

  autosave: boolean
  autosaveInterval: number
  autosaveShowMessage: boolean

  timeFont: BigTextFont.BigTextFont
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

  showBestPossibleTime: boolean
  showSumOfBests: boolean

  snackbarDuration: number

  keybindings: ConfigKeybindingMap.ConfigKeybindingMap
}


export default Config
