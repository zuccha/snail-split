import * as Keybinding from '../keybinding'


interface ConfigKeybindingMap {
  startTimer: Keybinding.Keybinding
  stopTimer: Keybinding.Keybinding
  toggleTimer: Keybinding.Keybinding
  resetTimer: Keybinding.Keybinding

  splitCurrentSegment: Keybinding.Keybinding
  invalidatePreviousSegment: Keybinding.Keybinding

  scrollSegmentsUp: Keybinding.Keybinding
  scrollSegmentsDown: Keybinding.Keybinding

  save: Keybinding.Keybinding

  quit: Keybinding.Keybinding
  forceQuit: Keybinding.Keybinding

  help: Keybinding.Keybinding
}


export default ConfigKeybindingMap
