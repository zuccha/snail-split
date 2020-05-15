import ConfigKeybindingMap from './ConfigKeybindingMap'


const defaultConfigKeybindingMap: ConfigKeybindingMap = {
  startTimer: undefined,
  stopTimer: undefined,
  toggleTimer: 'space',
  resetTimer: 'r',

  splitCurrentSegment: 'return',
  invalidatePreviousSegment: 'backspace',

  scrollSegmentsUp: 'up',
  scrollSegmentsDown: 'down',

  save: 's',

  quit: 'q',
  forceQuit: 'C-c',

  help: 'h',
}


export default defaultConfigKeybindingMap
