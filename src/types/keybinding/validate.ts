import fatal from '../../utils/fatal'
import Keybinding from './Keybinding'


const regexCtrl = /^C-[a-z]$/
const regexShift = /^S-[a-z]$/
const regexNonCapital = /^[\x21-\x40\x5b-\x7e]$/
const specialKeys = [
  'space', 'backspace', 'escape', 'delete', 'return', 'linefeed', 'tab',
  'up', 'down', 'left', 'right', 'pageup', 'pagedown', 'home', 'end',
  'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
]



const validate = (
  maybeKeybinding: unknown,
  defaultValue: Keybinding = undefined,
  property = 'property',
): Keybinding => {
  if (maybeKeybinding === undefined) {
    return defaultValue
  }

  if (maybeKeybinding === null) {
    return undefined
  }

  if (typeof maybeKeybinding !== 'string' || (
    !regexNonCapital.test(maybeKeybinding) &&
    !regexCtrl.test(maybeKeybinding)       &&
    !regexShift.test(maybeKeybinding)      &&
    !specialKeys.includes(maybeKeybinding)
  )) {
    fatal(
      `Failed to validate ${property}, `
      + `a keybinding was expected but "${maybeKeybinding}" was found instead`,
    )
  }

  return maybeKeybinding as Keybinding
}


export default validate
