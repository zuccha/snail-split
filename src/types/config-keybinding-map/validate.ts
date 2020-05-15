import fatal from '../../utils/fatal'
import * as Keybinding from '../keybinding'
import * as O from '../object'
import ConfigKeybindingMap from './ConfigKeybindingMap'
import defaultConfigKeybindingMap from './defaultConfigKeybindingMap'


const validate = (
  maybeConfigKeybindingMap: unknown,
  defaultValue = defaultConfigKeybindingMap,
  property = 'configKeybindingMap',
): ConfigKeybindingMap => {
  if (maybeConfigKeybindingMap === undefined) {
    return defaultValue
  }

  if (typeof maybeConfigKeybindingMap !== 'object' || maybeConfigKeybindingMap === null) {
    fatal(
      `Failed to validate ${property}, `
      + `a config keybinding map was expected but "${maybeConfigKeybindingMap}" was found instead`,
    )
  }

  const configKeybindingMap = maybeConfigKeybindingMap as { [keybinding: string]: string }

  // Map uppercase letters (e.g., 'A', 'Q', etc.) to the correct format (e.g.,
  // 'S-a', 'S-q', etc.).
  const configKeybindingMapNormalized = O.mapValues(
    configKeybindingMap,
    (keybindingName, keybindingValue) => {
      return typeof keybindingValue === 'string'
        && keybindingValue.length === 1
        && 'A' <= keybindingValue && keybindingValue <= 'Z'
        ? `S-${keybindingValue.toLowerCase()}`
        : keybindingValue
    },
  )

  const configKeybindingMapValidated = {
    // TIMER
    startTimer: Keybinding.validate(
      configKeybindingMapNormalized.startTimer,
      defaultConfigKeybindingMap.startTimer,
      `${property}.startTimer`,
    ),
    stopTimer: Keybinding.validate(
      configKeybindingMapNormalized.stopTimer,
      defaultConfigKeybindingMap.stopTimer,
      `${property}.stopTimer`,
    ),
    toggleTimer: Keybinding.validate(
      configKeybindingMapNormalized.toggleTimer,
      defaultConfigKeybindingMap.toggleTimer,
      `${property}.toggleTimer`,
    ),
    resetTimer: Keybinding.validate(
      configKeybindingMapNormalized.resetTimer,
      defaultConfigKeybindingMap.resetTimer,
      `${property}.resetTimer`,
    ),

    // SPLITS
    splitCurrentSegment: Keybinding.validate(
      configKeybindingMapNormalized.splitCurrentSegment,
      defaultConfigKeybindingMap.splitCurrentSegment,
      `${property}.splitCurrentSegment`,
    ),
    invalidatePreviousSegment: Keybinding.validate(
      configKeybindingMapNormalized.invalidatePreviousSegment,
      defaultConfigKeybindingMap.invalidatePreviousSegment,
      `${property}.invalidatePreviousSegment`,
    ),

    // SEGMENTS WINDOW
    scrollSegmentsUp: Keybinding.validate(
      configKeybindingMapNormalized.scrollSegmentsUp,
      defaultConfigKeybindingMap.scrollSegmentsUp,
      `${property}.scrollSegmentsUp`,
    ),
    scrollSegmentsDown: Keybinding.validate(
      configKeybindingMapNormalized.scrollSegmentsDown,
      defaultConfigKeybindingMap.scrollSegmentsDown,
      `${property}.scrollSegmentsDown`,
    ),

    // SAVE
    save: Keybinding.validate(
      configKeybindingMapNormalized.save,
      defaultConfigKeybindingMap.save,
      `${property}.save`,
    ),

    // QUIT
    quit: Keybinding.validate(
      configKeybindingMapNormalized.quit,
      defaultConfigKeybindingMap.quit,
      `${property}.quit`,
    ),
    forceQuit: Keybinding.validate(
      configKeybindingMapNormalized.forceQuit,
      defaultConfigKeybindingMap.forceQuit,
      `${property}.forceQuit`,
    ),

    // HELP
    help: Keybinding.validate(
      configKeybindingMapNormalized.help,
      defaultConfigKeybindingMap.help,
      `${property}.help`,
    ),
  }

  // Two commands cannot map to the same keybinding.
  if (O.hasDuplicateValues(configKeybindingMapValidated)) {
    fatal(
      `Failed to validate ${property}, `
      + 'the same keybinding was found for different commands.',
    )
  }

  return configKeybindingMapValidated
}


export default validate
