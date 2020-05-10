import IConfig from './IConfig'


const defaultConfig: IConfig = {
  fps: 30,

  autosave: true,
  autosaveInterval: 5000,
  autosaveShowMessage: false,

  segmentColumnDefinitions: [
    {
      title: 'Delta (abs.)',
      type: 'delta',
      leftTimeCategory: 'current',
      rightTimeCategory: 'pb',
      timeFrame: 'absolute',
    },
    {
      title: 'PB (abs.)',
      type: 'time',
      timeCategory: 'pb',
      timeFrame: 'absolute',
    },
  ],

  timeFormatDefault: 'H:MM:SS.mmm',
  timeFormatBelowHour: 'M:SS.mmm',
  timeFormatBelowMinute: 'S.mmm',
  timeFormatBelowSecond: '0.mmm',
  timeFormatZero: '0.000',
  timeFormatEmpty: '-',

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

  snackbarDuration: 3000,
}


export default defaultConfig
