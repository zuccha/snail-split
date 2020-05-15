import fatal from '../../utils/fatal'
import * as A from '../array'
import * as BigTextFont from '../big-text-font'
import * as B from '../boolean'
import * as ColumnDefinition from '../column-definition'
import * as ConfigKeybindingMap from '../config-keybinding-map'
import * as Integer from '../integer'
import * as S from '../string'
import Config from './Config'
import defaultConfig from './defaultConfig'


const validate = (
  maybeConfig: unknown,
  defaultValue = defaultConfig,
  property = 'config',
): Config => {
  if (maybeConfig === undefined) {
    return defaultValue
  }

  if (typeof maybeConfig !== 'object' || maybeConfig === null) {
    fatal(
      `Failed to validate ${property}, `
      + `a config was expected but "${maybeConfig}" was found instead`,
    )
  }

  const inputConfig = maybeConfig as { [key: string]: unknown }

  return {
    // FPS
    fps: Integer.validate(
      inputConfig.fps,
      defaultConfig.fps,
      `${property}.fps`,
    ),

    // AUTOSAVE
    autosave: B.validate(
      inputConfig.autosave,
      defaultConfig.autosave,
      `${property}.autosave`,
    ),
    autosaveInterval: Integer.validate(
      inputConfig.autosaveInterval,
      defaultConfig.autosaveInterval,
      `${property}.autosaveInterval`,
    ),
    autosaveShowMessage: B.validate(
      inputConfig.autosaveShowMessage,
      defaultConfig.autosaveShowMessage,
      `${property}.autosaveShowMessage`,
    ),

    // TOTAL TIME
    timeFont: BigTextFont.validate(
      inputConfig.timeFont,
      defaultConfig.timeFont,
      `${property}.timeFont`,
    ),
    timeFormatDefault: S.validate(
      inputConfig.timeFormatDefault,
      defaultConfig.timeFormatDefault,
      `${property}.timeFormatDefault`,
    ),
    timeFormatBelowHour: S.validate(
      inputConfig.timeFormatBelowHour,
      defaultConfig.timeFormatBelowHour,
      `${property}.timeFormatBelowHour`,
    ),
    timeFormatBelowMinute: S.validate(
      inputConfig.timeFormatBelowMinute,
      defaultConfig.timeFormatBelowMinute,
      `${property}.timeFormatBelowMinute`,
    ),
    timeFormatBelowSecond: S.validate(
      inputConfig.timeFormatBelowSecond,
      defaultConfig.timeFormatBelowSecond,
      `${property}.timeFormatBelowSecond`,
    ),
    timeFormatZero: S.validate(
      inputConfig.timeFormatZero,
      defaultConfig.timeFormatZero,
      `${property}.timeFormatZero`,
    ),
    timeFormatEmpty: S.validate(
      inputConfig.timeFormatEmpty,
      defaultConfig.timeFormatEmpty,
      `${property}.timeFormatEmpty`,
    ),

    // SEGMENT COLUMNS
    segmentColumnDefinitions: A.validate(
      inputConfig.segmentColumnDefinitions,
      [],
      `${property}.segmentColumnDefinitions`,
    ).map((maybeColumnDefinition, index) => ColumnDefinition.validate(
      maybeColumnDefinition,
      ColumnDefinition.defaultColumnDefinitionTime,
      `${property}.segmentColumnDefinitions[${index}]`,
    )),

    // SEGMENT TIMES
    segmentTimeFormatDefault: S.validate(
      inputConfig.segmentTimeFormatDefault,
      defaultConfig.segmentTimeFormatDefault,
      `${property}.segmentTimeFormatDefault`,
    ),
    segmentTimeFormatBelowHour: S.validate(
      inputConfig.segmentTimeFormatBelowHour,
      defaultConfig.segmentTimeFormatBelowHour,
      `${property}.segmentTimeFormatBelowHour`,
    ),
    segmentTimeFormatBelowMinute: S.validate(
      inputConfig.segmentTimeFormatBelowMinute,
      defaultConfig.segmentTimeFormatBelowMinute,
      `${property}.segmentTimeFormatBelowMinute`,
    ),
    segmentTimeFormatBelowSecond: S.validate(
      inputConfig.segmentTimeFormatBelowSecond,
      defaultConfig.segmentTimeFormatBelowSecond,
      `${property}.segmentTimeFormatBelowSecond`,
    ),
    segmentTimeFormatZero: S.validate(
      inputConfig.segmentTimeFormatZero,
      defaultConfig.segmentTimeFormatZero,
      `${property}.segmentTimeFormatZero`,
    ),
    segmentTimeFormatEmpty: S.validate(
      inputConfig.segmentTimeFormatEmpty,
      defaultConfig.segmentTimeFormatEmpty,
      `${property}.segmentTimeFormatEmpty`,
    ),

    // SEGMENT DELTA TIMES
    segmentDeltaFormatDefault: S.validate(
      inputConfig.segmentDeltaFormatDefault,
      defaultConfig.segmentDeltaFormatDefault,
      `${property}.segmentDeltaFormatDefault`,
    ),
    segmentDeltaFormatBelowHour: S.validate(
      inputConfig.segmentDeltaFormatBelowHour,
      defaultConfig.segmentDeltaFormatBelowHour,
      `${property}.segmentDeltaFormatBelowHour`,
    ),
    segmentDeltaFormatBelowMinute: S.validate(
      inputConfig.segmentDeltaFormatBelowMinute,
      defaultConfig.segmentDeltaFormatBelowMinute,
      `${property}.segmentDeltaFormatBelowMinute`,
    ),
    segmentDeltaFormatBelowSecond: S.validate(
      inputConfig.segmentDeltaFormatBelowSecond,
      defaultConfig.segmentDeltaFormatBelowSecond,
      `${property}.segmentDeltaFormatBelowSecond`,
    ),
    segmentDeltaFormatZero: S.validate(
      inputConfig.segmentDeltaFormatZero,
      defaultConfig.segmentDeltaFormatZero,
      `${property}.segmentDeltaFormatZero`,
    ),
    segmentDeltaFormatEmpty: S.validate(
      inputConfig.segmentDeltaFormatEmpty,
      defaultConfig.segmentDeltaFormatEmpty,
      `${property}.segmentDeltaFormatEmpty`,
    ),

    // OTHER GAME INFO
    showBestPossibleTime: B.validate(
      inputConfig.showBestPossibleTime,
      defaultConfig.showBestPossibleTime,
      `${property}.showBestPossibleTime`,
    ),
    showSumOfBests: B.validate(
      inputConfig.showSumOfBests,
      defaultConfig.showSumOfBests,
      `${property}.showSumOfBests`,
    ),

    // MESSAGE SNACKBAR
    snackbarDuration: Integer.validate(
      inputConfig.snackbarDuration,
      defaultConfig.snackbarDuration,
      `${property}.snackbarDuration`,
    ),

    // KEYBINDINGS
    keybindings: ConfigKeybindingMap.validate(
      inputConfig.keybindings,
      defaultConfig.keybindings,
      `${property}.keybindings`,
    ),
  }
}


export default validate
