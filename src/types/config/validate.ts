import * as A from '../array'
import * as Integer from '../integer'
import * as S from '../string'
import Config from './Config'
import defaultConfig from './defaultConfig'
import * as B from '../boolean'
import * as ColumnDefinition from '../column-definition'


type ITimeFont = 'slim' | 'fat'


const validateColumnDefinitions = (
  maybeColumnDefinitions: unknown,
): ColumnDefinition.ColumnDefinition[] => {
  const columnDefinitions = A.validate(maybeColumnDefinitions, defaultConfig.segmentColumnDefinitions)
    .map(maybeColumnDefinition => {
      if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
        return undefined
      }
      const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }
      if (maybeColumnDefinitionRecord.type === 'delta') {
        return ColumnDefinition.validateDelta(maybeColumnDefinition)
      }
      if (maybeColumnDefinitionRecord.type === 'time') {
        return ColumnDefinition.validateTime(maybeColumnDefinition)
      }
      return undefined
    })
    .filter(columnDefinition => columnDefinition !== undefined)

  return columnDefinitions as ColumnDefinition.ColumnDefinition[]
}

const validateTimeFont = (
  maybeTimeFont: unknown,
  defaultValue: ITimeFont = 'slim',
): ITimeFont => {
  return maybeTimeFont === 'slim' || maybeTimeFont === 'fat'
    ? maybeTimeFont
    : defaultValue
}

const validate = (
  maybeConfig: unknown,
  defaultValue = defaultConfig,
): Config => {
  if (typeof maybeConfig !== 'object' || maybeConfig === null) {
    return defaultValue
  }

  const inputConfig = maybeConfig as { [key: string]: unknown }

  return {
    fps: Integer.validate(inputConfig.fps, defaultConfig.fps),

    autosave: B.validate(inputConfig.autosave, defaultConfig.autosave),
    autosaveInterval: Integer.validate(inputConfig.autosaveInterval, defaultConfig.autosaveInterval),
    autosaveShowMessage: B.validate(inputConfig.autosaveShowMessage, defaultConfig.autosaveShowMessage),

    timeFont: validateTimeFont(inputConfig.timeFont, defaultConfig.timeFont),
    timeFormatDefault: S.validate(inputConfig.timeFormatDefault, defaultConfig.timeFormatDefault),
    timeFormatBelowHour: S.validate(inputConfig.timeFormatBelowHour, defaultConfig.timeFormatBelowHour),
    timeFormatBelowMinute: S.validate(inputConfig.timeFormatBelowMinute, defaultConfig.timeFormatBelowMinute),
    timeFormatBelowSecond: S.validate(inputConfig.timeFormatBelowSecond, defaultConfig.timeFormatBelowSecond),
    timeFormatZero: S.validate(inputConfig.timeFormatZero, defaultConfig.timeFormatZero),
    timeFormatEmpty: S.validate(inputConfig.timeFormatEmpty, defaultConfig.timeFormatEmpty),

    segmentColumnDefinitions: validateColumnDefinitions(inputConfig.segmentColumnDefinitions),

    segmentTimeFormatDefault: S.validate(inputConfig.segmentTimeFormatDefault, defaultConfig.segmentTimeFormatDefault),
    segmentTimeFormatBelowHour: S.validate(inputConfig.segmentTimeFormatBelowHour, defaultConfig.segmentTimeFormatBelowHour),
    segmentTimeFormatBelowMinute: S.validate(inputConfig.segmentTimeFormatBelowMinute, defaultConfig.segmentTimeFormatBelowMinute),
    segmentTimeFormatBelowSecond: S.validate(inputConfig.segmentTimeFormatBelowSecond, defaultConfig.segmentTimeFormatBelowSecond),
    segmentTimeFormatZero: S.validate(inputConfig.segmentTimeFormatZero, defaultConfig.segmentTimeFormatZero),
    segmentTimeFormatEmpty: S.validate(inputConfig.segmentTimeFormatEmpty, defaultConfig.segmentTimeFormatEmpty),

    segmentDeltaFormatDefault: S.validate(inputConfig.segmentDeltaFormatDefault, defaultConfig.segmentDeltaFormatDefault),
    segmentDeltaFormatBelowHour: S.validate(inputConfig.segmentDeltaFormatBelowHour, defaultConfig.segmentDeltaFormatBelowHour),
    segmentDeltaFormatBelowMinute: S.validate(inputConfig.segmentDeltaFormatBelowMinute, defaultConfig.segmentDeltaFormatBelowMinute),
    segmentDeltaFormatBelowSecond: S.validate(inputConfig.segmentDeltaFormatBelowSecond, defaultConfig.segmentDeltaFormatBelowSecond),
    segmentDeltaFormatZero: S.validate(inputConfig.segmentDeltaFormatZero, defaultConfig.segmentDeltaFormatZero),
    segmentDeltaFormatEmpty: S.validate(inputConfig.segmentDeltaFormatEmpty, defaultConfig.segmentDeltaFormatEmpty),

    snackbarDuration: Integer.validate(inputConfig.snackbarDuration, defaultConfig.snackbarDuration),

    showBestPossibleTime: B.validate(inputConfig.showBestPossibleTime, defaultConfig.showBestPossibleTime),
    showSumOfBests: B.validate(inputConfig.showSumOfBests, defaultConfig.showSumOfBests),
  }
}


export default validate
