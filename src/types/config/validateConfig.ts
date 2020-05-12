import { validateArray } from '../array'
import * as Integer from '../integer'
import { validateString } from '../string'
import IConfig from './IConfig'
import defaultConfig from './defaultConfig'
import { validateBoolean } from '../boolean'
import { validateColumnDefinitionDelta, validateColumnDefinitionTime, IColumnDefinition } from '../column-definition'


type ITimeFont = 'slim' | 'fat'


const validateColumnDefinitions = (
  maybeColumnDefinitions: unknown,
): IColumnDefinition[] => {
  const columnDefinitions = validateArray(maybeColumnDefinitions, defaultConfig.segmentColumnDefinitions)
    .map(maybeColumnDefinition => {
      if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
        return undefined
      }
      const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }
      if (maybeColumnDefinitionRecord.type === 'delta') {
        return validateColumnDefinitionDelta(maybeColumnDefinition)
      }
      if (maybeColumnDefinitionRecord.type === 'time') {
        return validateColumnDefinitionTime(maybeColumnDefinition)
      }
      return undefined
    })
    .filter(columnDefinition => columnDefinition !== undefined)

  return columnDefinitions as IColumnDefinition[]
}

const validateTimeFont = (
  maybeTimeFont: unknown,
  defaultValue: ITimeFont = 'slim',
): ITimeFont => {
  return maybeTimeFont === 'slim' || maybeTimeFont === 'fat'
    ? maybeTimeFont
    : defaultValue
}

const validateConfig = (
  maybeConfig: unknown,
  defaultValue = defaultConfig,
): IConfig => {
  if (typeof maybeConfig !== 'object' || maybeConfig === null) {
    return defaultValue
  }

  const inputConfig = maybeConfig as { [key: string]: unknown }

  return {
    fps: Integer.validate(inputConfig.fps, defaultConfig.fps),

    autosave: validateBoolean(inputConfig.autosave, defaultConfig.autosave),
    autosaveInterval: Integer.validate(inputConfig.autosaveInterval, defaultConfig.autosaveInterval),
    autosaveShowMessage: validateBoolean(inputConfig.autosaveShowMessage, defaultConfig.autosaveShowMessage),

    timeFont: validateTimeFont(inputConfig.timeFont, defaultConfig.timeFont),
    timeFormatDefault: validateString(inputConfig.timeFormatDefault, defaultConfig.timeFormatDefault),
    timeFormatBelowHour: validateString(inputConfig.timeFormatBelowHour, defaultConfig.timeFormatBelowHour),
    timeFormatBelowMinute: validateString(inputConfig.timeFormatBelowMinute, defaultConfig.timeFormatBelowMinute),
    timeFormatBelowSecond: validateString(inputConfig.timeFormatBelowSecond, defaultConfig.timeFormatBelowSecond),
    timeFormatZero: validateString(inputConfig.timeFormatZero, defaultConfig.timeFormatZero),
    timeFormatEmpty: validateString(inputConfig.timeFormatEmpty, defaultConfig.timeFormatEmpty),

    segmentColumnDefinitions: validateColumnDefinitions(inputConfig.segmentColumnDefinitions),

    segmentTimeFormatDefault: validateString(inputConfig.segmentTimeFormatDefault, defaultConfig.segmentTimeFormatDefault),
    segmentTimeFormatBelowHour: validateString(inputConfig.segmentTimeFormatBelowHour, defaultConfig.segmentTimeFormatBelowHour),
    segmentTimeFormatBelowMinute: validateString(inputConfig.segmentTimeFormatBelowMinute, defaultConfig.segmentTimeFormatBelowMinute),
    segmentTimeFormatBelowSecond: validateString(inputConfig.segmentTimeFormatBelowSecond, defaultConfig.segmentTimeFormatBelowSecond),
    segmentTimeFormatZero: validateString(inputConfig.segmentTimeFormatZero, defaultConfig.segmentTimeFormatZero),
    segmentTimeFormatEmpty: validateString(inputConfig.segmentTimeFormatEmpty, defaultConfig.segmentTimeFormatEmpty),

    segmentDeltaFormatDefault: validateString(inputConfig.segmentDeltaFormatDefault, defaultConfig.segmentDeltaFormatDefault),
    segmentDeltaFormatBelowHour: validateString(inputConfig.segmentDeltaFormatBelowHour, defaultConfig.segmentDeltaFormatBelowHour),
    segmentDeltaFormatBelowMinute: validateString(inputConfig.segmentDeltaFormatBelowMinute, defaultConfig.segmentDeltaFormatBelowMinute),
    segmentDeltaFormatBelowSecond: validateString(inputConfig.segmentDeltaFormatBelowSecond, defaultConfig.segmentDeltaFormatBelowSecond),
    segmentDeltaFormatZero: validateString(inputConfig.segmentDeltaFormatZero, defaultConfig.segmentDeltaFormatZero),
    segmentDeltaFormatEmpty: validateString(inputConfig.segmentDeltaFormatEmpty, defaultConfig.segmentDeltaFormatEmpty),

    snackbarDuration: Integer.validate(inputConfig.snackbarDuration, defaultConfig.snackbarDuration),

    showBestPossibleTime: validateBoolean(inputConfig.showBestPossibleTime, defaultConfig.showBestPossibleTime),
    showSumOfBests: validateBoolean(inputConfig.showSumOfBests, defaultConfig.showSumOfBests),
  }
}


export default validateConfig
