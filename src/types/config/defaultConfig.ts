import IConfig from './IConfig'


const defaultConfig: IConfig = {
  fps: 30,

  autosave: true,
  autosaveInterval: 5000,

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

  timeFormatDefault: 'H:MM:SS',
  timeFormatBelowHour: 'M:SS',
  timeFormatBelowMinute: 'S',
  timeFormatBelowSecond: '0',
  timeFormatZero: '0',
  timeFormatEmpty: '-',

  segmentTimeFormatDefault: 'H:MM:SS',
  segmentTimeFormatBelowHour: 'M:SS',
  segmentTimeFormatBelowMinute: 'S',
  segmentTimeFormatBelowSecond: '0',
  segmentTimeFormatZero: '0',
  segmentTimeFormatEmpty: '-',

  segmentDeltaFormatDefault: 'H:MM:SS',
  segmentDeltaFormatBelowHour: 'M:SS',
  segmentDeltaFormatBelowMinute: 'S',
  segmentDeltaFormatBelowSecond: '0',
  segmentDeltaFormatZero: '0',
  segmentDeltaFormatEmpty: '-',
}


export default defaultConfig
