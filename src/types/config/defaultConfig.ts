import * as ConfigKeybindingMap from '../config-keybinding-map'
import Config from './Config'


const defaultConfig: Config = {
  fps: 30,

  autosave: true,
  autosaveInterval: 10000,
  autosaveShowMessage: false,

  segmentColumnDefinitions: [
    {
      title: 'Delta',
      type: 'delta',
      leftTimeCategory: 'current',
      rightTimeCategory: 'pb',
      timeFrame: 'absolute',
    },
    {
      title: 'PB',
      type: 'time',
      timeCategory: 'pb',
      timeFrame: 'absolute',
    },
  ],

  timeFont: 'slim',
  timeFormatDefault: 'H:MM:SS.mmm',
  timeFormatBelowHour: 'M:SS.mmm',
  timeFormatBelowMinute: 'S.mmm',
  timeFormatBelowSecond: '0.mmm',
  timeFormatZero: '0.000',
  timeFormatEmpty: '0.000',

  segmentTimeFormatDefault: 'H:MM:SS.mmm',
  segmentTimeFormatBelowHour: 'M:SS.mmm',
  segmentTimeFormatBelowMinute: 'S.mmm',
  segmentTimeFormatBelowSecond: '0.mmm',
  segmentTimeFormatZero: '0.000',
  segmentTimeFormatEmpty: '-',

  segmentDeltaFormatDefault: 'H:MM:SS.mmm',
  segmentDeltaFormatBelowHour: 'M:SS.mmm',
  segmentDeltaFormatBelowMinute: 'S.mmm',
  segmentDeltaFormatBelowSecond: '0.mmm',
  segmentDeltaFormatZero: '0.000',
  segmentDeltaFormatEmpty: '-',

  showBestPossibleTime: true,
  showSumOfBests: true,

  snackbarDuration: 3000,

  keybindings: ConfigKeybindingMap.defaultConfigKeybindingMap,
}


export default defaultConfig
